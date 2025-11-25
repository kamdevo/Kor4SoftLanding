import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
  Column,
} from '@react-email/components';

interface ContactEmailProps {
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
}

const asuntoLabels: Record<string, string> = {
  'desarrollo-web': 'Desarrollo Web',
  'app-movil': 'Aplicación Móvil',
  'automatizacion': 'Automatización',
  'consultoria': 'Consultoría',
  'otro': 'Otro',
};

export const ContactEmail = ({
  nombre,
  email,
  telefono,
  asunto,
  mensaje,
}: ContactEmailProps) => {
  const asuntoLabel = asuntoLabels[asunto] || asunto;
  
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {nombre} - {asuntoLabel}</Preview>
      <Tailwind>
        <Body className="bg-slate-100 font-sans">
          <Container className="mx-auto my-8 max-w-xl">
            {/* Header */}
            <Section className="bg-slate-800 rounded-t-xl px-8 py-10">
              <Heading className="text-white text-2xl font-bold m-0 text-center">
                Kor4Soft
              </Heading>
              <Text className="text-slate-300 text-center text-sm m-0 mt-2">
                Nuevo mensaje de contacto
              </Text>
            </Section>

            {/* Contenido Principal */}
            <Section className="bg-white px-8 py-8">
              <Heading as="h2" className="text-slate-800 text-xl font-bold m-0 mb-6">
                Detalles del mensaje
              </Heading>

              {/* Información del contacto */}
              <Section className="bg-slate-50 rounded-lg p-6 mb-6">
                <Row className="mb-4">
                  <Column>
                    <Text className="text-slate-500 text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Nombre
                    </Text>
                    <Text className="text-slate-800 text-base font-medium m-0">
                      {nombre}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-4">
                  <Column>
                    <Text className="text-slate-500 text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Correo electrónico
                    </Text>
                    <Text className="text-slate-800 text-base font-medium m-0">
                      {email}
                    </Text>
                  </Column>
                </Row>

                {telefono && (
                  <Row className="mb-4">
                    <Column>
                      <Text className="text-slate-500 text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                        Teléfono
                      </Text>
                      <Text className="text-slate-800 text-base font-medium m-0">
                        {telefono}
                      </Text>
                    </Column>
                  </Row>
                )}

                <Row>
                  <Column>
                    <Text className="text-slate-500 text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Asunto
                    </Text>
                    <Text className="text-slate-800 text-base font-medium m-0">
                      {asuntoLabel}
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Hr className="border-slate-200 my-6" />

              {/* Mensaje */}
              <Text className="text-slate-500 text-xs uppercase tracking-wide font-semibold m-0 mb-3">
                Mensaje
              </Text>
              <Section className="bg-slate-50 rounded-lg p-6">
                <Text className="text-slate-700 text-base leading-relaxed m-0 whitespace-pre-wrap">
                  {mensaje}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-slate-800 rounded-b-xl px-8 py-6">
              <Text className="text-slate-400 text-xs text-center m-0">
                Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
              </Text>
              <Text className="text-slate-500 text-xs text-center m-0 mt-2">
                © {new Date().getFullYear()} Kor4Soft. Todos los derechos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
