

# Plano: Atualizar Comunicação, Logo e Estrutura para Conversão

## Diagnóstico da Comunicação Atual

A comunicação **nao esta alinhada** com as 3 dores que a Pipeline resolve. Atualmente:
- Hero diz "ONDE SEU CRESCIMENTO ACONTECE" -- generico, nao gera conexao com dor
- ServicesSection lista Trafego Pago, Migracao de Sistemas, Social Media, Criacao de Sites -- **nao reflete os 3 servicos reais**
- Nenhuma secao fala diretamente das dores do cliente
- CTAs genericos ("Comecar Agora", "Dominar o Digital") -- nao geram urgencia

## O que Sera Feito

### 1. Adicionar Logo/Favicon
- Copiar `FAVICON_sem_fundo.png` para `src/assets/pipeline-favicon.png` e `public/favicon.png`
- Atualizar `index.html` com favicon
- Substituir o circulo vermelho no Navbar e Footer pela logo real
- Usar a logo no formulario do hero tambem

### 2. Reescrever Comunicacao do Hero (conexao com dores)
- Titulo: "SEUS LEADS NAO VIRAM VENDAS?" (conecta com dor #1 e #2)
- Subtitulo: "Geramos demanda qualificada, profissionalizamos seu atendimento comercial e implementamos CRM para voce nao perder nenhuma oportunidade."
- Stats: "+500 Leads qualificados/mes", "3x Mais conversao comercial", "100% Controle do funil"
- CTA: "Quero Gerar Mais Vendas" em vez de "Comecar Agora"
- Form titulo: "Receba um diagnostico gratuito"

### 3. Adicionar Secao de Dores (nova secao apos Hero, antes de Processo)
Nova secao "PainPointsSection" mostrando as 3 dores:
- "Leads desqualificados ou inexistentes" -- Voce investe em trafego mas os leads que chegam nao tem perfil de compra?
- "Atendimento amador no WhatsApp" -- Seus vendedores nao sabem conduzir leads do digital ate o fechamento?
- "Zero controle sobre seus leads" -- Voce nao sabe em que etapa cada lead esta e perde vendas por falta de acompanhamento?

Cada dor com CTA: "A Pipeline resolve isso"

### 4. Reescrever ServicesSection (alinhar com os 3 servicos reais)
Substituir os 4 servicos atuais pelos 3 reais:
1. **Geracao de Demanda por Trafego Pago** -- Campanhas estrategicas que atraem leads qualificados prontos para comprar
2. **Atendimento Comercial Profissional** -- Treinamento e estruturacao do time comercial para converter leads do digital pelo WhatsApp
3. **Implementacao de CRM** -- Controle total do funil de vendas com CRM, para nenhum lead ser esquecido

### 5. Reescrever ProcessSection
Alinhar os 4 passos com a jornada real:
1. Diagnostico -- Analisamos sua operacao comercial, canais e gargalos de conversao
2. Estrategia de Trafego -- Criamos campanhas que geram leads qualificados para seu negocio
3. Estruturacao Comercial -- Treinamos seu time e implementamos CRM para controle total
4. Otimizacao Continua -- Acompanhamos metricas e otimizamos cada etapa do funil

### 6. Reescrever CTAs e textos de todas as secoes
- **ResultsSection**: Manter numeros mas mudar labels para refletir conversao comercial
- **AboutSection**: Pilares mudam para "Trafego Qualificado", "Vendas pelo WhatsApp", "CRM & Funil"
- **CTASection**: "CANSADO DE PERDER VENDAS?" + "Pare de deixar dinheiro na mesa. Cada lead que voce perde e uma venda que seu concorrente fecha."
- **FAQSection**: Perguntas alinhadas com as 3 dores
- **ContactSection**: "Quer parar de perder vendas?" + texto sobre diagnostico gratuito

### 7. Corrigir Espaçamentos Restantes
- Revisar todos os `clamp()` e `break-words` para garantir que nenhum texto e cortado
- Verificar hero em viewport 1067x615 para garantir visibilidade completa

### 8. Estrutura Final das Secoes
```text
Navbar (com logo)
Hero (com formulario + comunicacao de dor)
PainPointsSection (3 dores) -- NOVA
ProcessSection (4 passos alinhados)
ServicesSection (3 servicos reais) -- renomeado "Solucoes"
ResultsSection (numeros de conversao)
TestimonialsSection (depoimentos)
AboutSection (pilares alinhados)
FAQSection (perguntas sobre as 3 dores)
CTASection ("Cansado de perder vendas?")
ContactSection (formulario + diagnostico gratuito)
FooterSection (com logo real)
```

## Arquivos

**Criar:**
- `src/components/PainPointsSection.tsx`

**Modificar:**
- `index.html` -- favicon
- `src/pages/Index.tsx` -- adicionar PainPointsSection
- `src/components/Navbar.tsx` -- logo real
- `src/components/HeroSection.tsx` -- nova comunicacao
- `src/components/ProcessSection.tsx` -- textos alinhados
- `src/components/ServicesSection.tsx` -- 3 servicos reais
- `src/components/ResultsSection.tsx` -- labels de conversao
- `src/components/AboutSection.tsx` -- pilares alinhados
- `src/components/CTASection.tsx` -- CTA de urgencia
- `src/components/FAQSection.tsx` -- perguntas sobre dores
- `src/components/ContactSection.tsx` -- texto de diagnostico
- `src/components/FooterSection.tsx` -- logo real

