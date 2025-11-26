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

    // HTML del email con estilo Kor4Soft Premium
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Contacto Kor4Soft</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01); border: 1px solid #e2e8f0;">
                  
                  <!-- Header con Gradiente -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 48px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Kor4Soft</h1>
                      <p style="margin: 12px 0 0 0; color: #94a3b8; font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">Notificación de Nuevo Lead</p>
                    </td>
                  </tr>
                  
                  <!-- Cuerpo Principal -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <!-- Saludo -->
                      <p style="margin: 0 0 30px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                        Hola equipo, han recibido un nuevo mensaje a través del formulario de contacto web. Aquí están los detalles:
                      </p>

                      <!-- Tarjeta de Información -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; border-radius: 12px; margin-bottom: 32px; border: 1px solid #e2e8f0;">
                        
                        <!-- Nombre -->
                        <tr>
                          <td style="padding: 24px 24px 16px 24px; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">👤 Cliente</p>
                            <p style="margin: 0; color: #0f172a; font-size: 16px; font-weight: 600;">${nombre}</p>
                          </td>
                        </tr>

                        <!-- Email -->
                        <tr>
                          <td style="padding: 16px 24px; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">✉️ Correo Electrónico</p>
                            <p style="margin: 0; color: #0f172a; font-size: 16px; font-weight: 500;">
                              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>

                        <!-- Teléfono (Condicional) -->
                        ${telefono ? `
                        <tr>
                          <td style="padding: 16px 24px; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">📱 Teléfono</p>
                            <p style="margin: 0; color: #0f172a; font-size: 16px; font-weight: 500;">
                              <a href="tel:${telefono}" style="color: #334155; text-decoration: none;">${telefono}</a>
                            </p>
                          </td>
                        </tr>
                        ` : ''}

                        <!-- Asunto -->
                        <tr>
                          <td style="padding: 16px 24px 24px 24px;">
                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">🔖 Asunto</p>
                            <div style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600;">
                              ${asuntoLabel}
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Sección de Mensaje -->
                      <div style="margin-top: 32px;">
                        <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);">
                          <div style="background-color: #f8fafc; padding: 12px 24px; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">💬 Mensaje del Cliente</p>
                          </div>
                          <div style="padding: 24px;">
                             <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${mensaje}</p>
                          </div>
                        </div>
                      </div>

                      <!-- Botón de Acción -->
                      <div style="text-align: center; margin-top: 40px;">
                        <a href="mailto:${email}?subject=Re: ${asuntoLabel} - Kor4Soft&body=Hola ${nombre.split(' ')[0]},%0D%0A%0D%0AGracias por contactarnos..." style="background-color: #0f172a; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.2);">
                          Responder a ${nombre.split(' ')[0]} &rarr;
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer Premium -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 32px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 13px;">Este es un mensaje automatizado enviado desde <a href="https://kor4soft.com" style="color: #2563eb; text-decoration: none;">kor4soft.com</a></p>
                      
                      <!-- Redes Sociales Simples -->
                      <div style="margin-bottom: 20px;">
                        <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61584353451934" style="color: #94a3b8; text-decoration: none; margin: 0 10px; font-weight: 500; font-size: 12px;">Facebook</a>
                        <span style="color: #cbd5e1;">|</span>
                        <a href="https://www.instagram.com/kor4soft/" style="color: #94a3b8; text-decoration: none; margin: 0 10px; font-weight: 500; font-size: 12px;">Instagram</a>
                      </div>

                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">© ${new Date().getFullYear()} Kor4Soft S.A.S. Cali, Colombia.</p>
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
