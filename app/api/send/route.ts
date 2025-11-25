import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Verificar credenciales de Gmail
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (!gmailUser || !gmailAppPassword) {
      console.error('Credenciales de Gmail no configuradas');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Configurar transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const body = await request.json();
    const { nombre, email, telefono, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      );
    }

    // Mapeo de asuntos
    const asuntoLabels: Record<string, string> = {
      'desarrollo-web': 'Desarrollo Web',
      'app-movil': 'Aplicación Móvil',
      'automatizacion': 'Automatización',
      'consultoria': 'Consultoría',
      'otro': 'Otro',
    };

    const asuntoLabel = asuntoLabels[asunto] || asunto;

    // HTML del email con estilo Kor4Soft
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #334155 0%, #1e293b 100%); padding: 40px 32px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">Kor4Soft</h1>
                      <p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 14px;">Nuevo mensaje de contacto</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 32px;">
                      <h2 style="margin: 0 0 24px 0; color: #1e293b; font-size: 18px; font-weight: 600;">Detalles del mensaje</h2>
                      
                      <!-- Info Box -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 24px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Nombre</p>
                                  <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 500;">${nombre}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Correo electrónico</p>
                                  <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 500;">${email}</p>
                                </td>
                              </tr>
                              ${telefono ? `
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Teléfono</p>
                                  <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 500;">${telefono}</p>
                                </td>
                              </tr>
                              ` : ''}
                              <tr>
                                <td>
                                  <p style="margin: 0 0 4px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Asunto</p>
                                  <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 500;">${asuntoLabel}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Divider -->
                      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
                      
                      <!-- Message -->
                      <p style="margin: 0 0 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Mensaje</p>
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 24px;">
                        <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1e293b; padding: 24px 32px; text-align: center;">
                      <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
                      <p style="margin: 0; color: #64748b; font-size: 12px;">© ${new Date().getFullYear()} Kor4Soft. Todos los derechos reservados.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Enviar email
    const mailOptions = {
      from: `Kor4Soft Web <${gmailUser}>`,
      to: gmailUser, // Se envía a tu propio correo
      replyTo: email, // Para responder directamente al cliente
      subject: `Nuevo contacto: ${asuntoLabel} - ${nombre}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
