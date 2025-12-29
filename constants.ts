import { Scissors, Award, Users, TrendingUp, Clock, ShieldCheck, GraduationCap, Video } from 'lucide-react';

// ==========================================
// CONFIGURAÇÕES GERAIS DO SITE
// Edite aqui os textos, links e imagens
// ==========================================

export const COMPANY_INFO = {
  name: "Master Barber Academy",
  instructor: "Ricardo Silva",
  whatsapp: "5511999999999",
  email: "contato@masterbarber.com.br",
  checkoutUrl: "https://pay.kiwify.com.br/plHiLh6?afid=cF1qLmsD",
  pixelId: "SEU_PIXEL_ID",
};

export const PRICING = {
  fullPrice: "R$ 297,00",
  discountPrice: "R$ 47,00",
  installments: "11x de R$ 5,22*",
};

export const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
  instructor: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1760&auto=format&fit=crop",
  certificate1: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/basico-black.jpg",
  certificate2: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/profissional-padrao.jpg",
  securityBadges: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/seguro-fno.png"
};

export const HERO_CONTENT = {
  headline: "VEJA COMO SE TORNAR UM BARBEIRO PROFISSIONAL COMEÇANDO DO ABSOLUTO ZERO",
  subheadline: "Aprenda as melhores técnicas de corte mesmo que você NUNCA TENHA PEGADO EM UMA TESOURA.",
  callout: "Chegue a faturar entre R$ 3.100,00 à R$ 8.000,00 por mês no mercado que mais cresce no Brasil.",
  videoPlaceholder: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
};

export const RESULTS_CONTENT = {
  icon: "https://www.fabricabarbeiros3.online/images/cbo/modulos/beneficio02.svg",
  headlinePrefix: "+ DE",
  headlineNumber: "17.725",
  headlineSuffix: "ALUNOS CERTIFICADOS EM TODO O BRASIL",
  description: "Muitos alunos começaram do absoluto zero e nunca tinham pegado em uma tesoura para cortar cabelo, e graças ao nosso curso, hoje trabalham como barbeiros profissionais.",
  highlightImages: [
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/01.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/02.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/06.jpeg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/10.jpg"
  ],
  carouselImages: [
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/20.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/17.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/24.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/15.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/16.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/03.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/21.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/11.jpeg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/01.jpeg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/27.jpg",
    "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/23.jpg"
  ]
};

export const CUTS_SHOWCASE = [
  {
    title: "Corte social na máquina",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/07.1.jpg"
  },
  {
    title: "Corte social na tesoura",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/08.3.jpg"
  },
  {
    title: "Degradê (High fade)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/11.1.jpg"
  },
  {
    title: "Degradê (Mid fade)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/11.2.jpg"
  },
  {
    title: "Degradê (Low fade)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/11.3.jpg"
  },
  {
    title: "Degradê navalhado",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/14.jpg"
  },
  {
    title: "Corte em V",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/15-1.jpg"
  },
  {
    title: "Razor part",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/16-1.jpg"
  },
  {
    title: "Burst Fade (Moicano disfarçado Europeu)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/17-1.jpg"
  },
  {
    title: "Taper Fade (Corte americano)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/18.jpg"
  },
  {
    title: "Flat Top (Corte do Will Smith)",
    image: "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/19.jpg"
  }
];

export const HERO_FEATURES = [
  "Materiais de uso",
  "Técnica de tesoura",
  "Técnica de navalha",
  "MANUSEIO DA MÁQUINA",
  "Corte social (Máquina)",
  "Corte social (Tesoura)",
  "Técnica do pezinho",
  "Técnica da sobrancelha",
  "Técnicas de Fade/Degradê",
  "High Fade (Degradê alto)",
  "Mid Fade (Degradê médio)",
  "Low Fade (Degradê baixo)",
  "Entenda Os 3 tons do degradê",
  "Entenda o que são linhas de recessão",
  "Aprenda a fazer um \"Fade Limpo\" e tirar marcações",
  "Corte navalhado",
  "Corte em V",
  "Razor Part",
  "Burst Fade (Moicano disfarçado Europeu)",
  "Taper Fade (Corte americano)",
  "Flat Top (Corte do Will Smith)",
  "Pigmentação permanente",
  "Platinado",
  "Reflexo alinhado",
  "Limpeza de máquina",
  "Lâmina de cerâmica (Troca e manutenção)",
  "Freestyle 3D",
  "Desenhos animes",
  "E muito mais..."
];

export const BENEFITS = [
  {
    icon: Scissors,
    title: "Técnicas Modernas",
    description: "Aprenda os cortes mais pedidos: Fade, Pompadour, Freestyle e Barboterapia."
  },
  {
    icon: TrendingUp,
    title: "Gestão e Carreira",
    description: "Não ensinamos apenas a cortar. Ensinamos a atrair clientes e gerir sua barbearia."
  },
  {
    icon: Clock,
    title: "Aprendizado Rápido",
    description: "Método intensivo focado na prática para você começar a faturar o quanto antes."
  },
  {
    icon: Award,
    title: "Certificado Válido",
    description: "Diploma reconhecido em todo território nacional para valorizar seu portfólio."
  }
];

export const MODULES = [
  "Módulo 1: Introdução e Ferramentas",
  "Módulo 2: Geometria do Corte e Visagismo",
  "Módulo 3: Técnicas de Fade (Degradê)",
  "Módulo 4: Barba, Cavanhaque e Bigode",
  "Módulo 5: Pigmentação e Acabamentos",
  "Módulo 6: Atendimento e Fidelização",
  "Módulo 7: Marketing para Barbeiros",
];

export const DETAILED_BONUSES = [
  {
    title: "PIGMENTAÇÃO PERMANENTE",
    badge: "+2 Aulas Bônus",
    image: "https://www.fabricabarbeiros3.online/images/profissional/modulos/21.jpg",
    description: "E você ainda irá receber 2 aulas de pigmentação permanente totalmente grátis.",
    price: "R$ 197,00"
  },
  {
    title: "PIGMENTAÇÃO + DEGRADÊ NA BARBA",
    badge: "+1 Aula Bônus",
    image: "https://www.fabricabarbeiros3.online/images/profissional/modulos/23.jpg",
    description: "E também irá ganhar 1 aula de pigmentação permanente + Degradê na barba.",
    price: "R$ 97,00"
  },
  {
    title: "PLATINADO SEM ARDÊNCIA",
    badge: "+1 Aula Bônus",
    image: "https://www.fabricabarbeiros3.online/images/profissional/modulos/24.jpg",
    description: "Você também irá aprender a realizar um platinado 100% BRANCO e SEM CAUSAR ARDÊNCIA no couro cabeludo dos seus clientes.",
    price: "R$ 97,00"
  },
  {
    title: "REFLEXO ALINHADO",
    badge: "+1 Aula Bônus",
    image: "https://www.fabricabarbeiros3.online/images/profissional/modulos/25.3.jpg",
    description: "Você também vai aprender a realizar um Reflexo Alinhado de forma correta, um corte que vem sendo bastante pedido dentro das barbearias.",
    price: "R$ 97,00"
  },
  {
    title: "CERTIFICADO DE CONCLUSÃO",
    badge: "",
    image: "https://www.fabricabarbeiros3.online/images/certificados/profissional-padrao.jpg",
    description: "Após concluir o nosso Curso de Barbeiro Profissional você ainda irá receber este maravilhoso CERTIFICADO DE CONCLUSÃO, totalmente grátis.",
    price: "R$ 97,00"
  },
  {
    title: "CERTIFICADO DE CONCLUSÃO (BLACK)",
    badge: "Bônus exclusivo",
    image: "https://www.fabricabarbeiros3.online/images/certificados/basico-black.jpg",
    description: "Você ainda também irá receber este maravilhoso CERTIFICADO DE CONCLUSÃO (BLACK), exclusivo apenas para que se inscrever hoje.",
    price: "R$ 147,00"
  },
  {
    title: "CARTÕES DE VISITA PRONTOS",
    badge: "",
    image: "https://www.fabricabarbeiros3.online/images/profissional/bonus-02.jpg",
    description: "Vamos te presentear também com mais 10 modelos de cartões de visita prontos para você colocar seus dados e mandar imprimir. Assim você já pode começar na divulgação do seu trabalho.",
    price: "R$ 250,00"
  }
];

export const BONUS_SUMMARY = [
  { name: "+2 AULAS DE PIGMENTAÇÃO PERMANENTE", price: "R$ 197,00" },
  { name: "+1 AULA DE PIGMENTAÇÃO PERMANENTE + DEGRADÊ NA BARBA", price: "R$ 97,00" },
  { name: "+1 AULA PLATINADO SEM ARDÊNCIA", price: "R$ 97,00" },
  { name: "+1 AULA REFLEXO ALINHADO", price: "R$ 97,00" },
  { name: "CERTIFICADO DE CONCLUSÃO", price: "R$ 97,00" },
  { name: "CERTIFICADO DE BLACK", price: "R$ 97,00" },
  { name: "CARTÕES DE VISITA PRONTOS", price: "R$ 250,00" }
];

export const LIFE_CHANGING_IMAGES = [
  "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/06.jpg",
  "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/20-1.jpg",
  "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/26.jpg",
  "https://fabricabarbeiros3.online/wp/wp-content/uploads/2024/07/13.jpeg"
];

// NOTE: This uses the deprecated `BONUSES` export that might be used by other files. 
// We keep it to avoid breaking changes if `Guarantee.tsx` wasn't fully refactored, 
// but the new `Guarantee` component will use `DETAILED_BONUSES`.
export const BONUSES = [
  {
    title: "Bônus 1: Manual do Barbeiro Empreendedor",
    value: "R$ 97,00",
    description: "Guia completo para abrir seu CNPJ e legalizar seu negócio."
  },
  {
    title: "Bônus 2: Pack de Artes para Redes Sociais",
    value: "R$ 147,00",
    description: "Templates editáveis para divulgar seu trabalho no Instagram."
  },
  {
    title: "Bônus 3: Comunidade VIP de Alunos",
    value: "Inestimável",
    description: "Network com barbeiros de todo o Brasil para troca de experiências."
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Eduardo",
    role: "Barbeiro há 6 meses",
    text: "O curso mudou minha vida. Eu trabalhava em escritório e hoje tenho minha própria cadeira faturando o triplo.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Felipe Souza",
    role: "Dono de Barbearia",
    text: "Comprei o curso para treinar minha equipe. A didática do Ricardo é impressionante. Recomendo demais!",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "João Pedro",
    role: "Iniciante",
    text: "Estava com medo de não aprender online, mas os ângulos das câmeras mostram cada detalhe do corte.",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona o curso?",
    answer: "Nosso curso é <strong>totalmente online</strong> e logo após realizar a sua inscrição, você irá receber os <strong>dados de acesso</strong> da nossa plataforma onde você terá <strong>acesso total ao curso.</strong>"
  },
  {
    question: "Como realizo a minha inscrição?",
    answer: "É muito simples, basta você clicar em qualquer “botão de inscrição” acima que você será redirecionado para a nossa página de inscrição, depois basta você... <ul><li>1) Preencher todas as informações</li><li>2) Escolher a forma de pagamento </li><li>3) Após confirmar o pagamento você irá receber em seu e-mail os dados de acesso ao curso. <br><small>OBS.: Será através do seu e-mail que você irá acessar o curso, por isso preste bastante atenção para preencher tudo corretamente.</small></li><li>4) Pronto, agora basta você acessar a plataforma e assistir às aulas ;).</li></ul>"
  },
  {
    question: "O que eu irei receber?",
    answer: "Você vai receber acesso exclusivo à nossa plataforma onde contém todas as <strong>videoaulas, materiais para baixar, bônus exclusivos</strong> e também o <strong>seu certificado</strong>."
  },
  {
    question: "Tenho que pagar mensalidade?",
    answer: "<strong>Não</strong>, o pagamento do curso é único e não possui mensalidades ou qualquer outra taxa adicional. Resumindo, você irá pagar apenas <strong>R$ 147,00</strong> e nada mais do que isso."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Na hora de realizar a sua inscrição, você poderá escolher pagar com Boleto Bancário ou Cartão de Crédito ou PIX. <br><br><strong>Qual a diferença de pagar com Boleto Bancário / Cartão de Crédito / PIX?</strong> <br>A grande diferença entre as 3 opções são: <br><br><strong>PIX:</strong> Você terá <u>acesso imediato</u> ao curso. <br><br><strong>Cartão de Crédito:</strong> Você terá <u>acesso imediato</u> ao curso e também poderá parcelar em <u>até 12X.</u> <br><br><strong>Boleto Bancário:</strong> Diferente do cartão de crédito e PIX que a aprovação do pagamento é praticamente na hora, no caso do boleto bancário é necessário aguardar o banco reconhecer o pagamento e compensar o boleto, este procedimento pode levar <u>até 72 horas</u>. <br><br>Outro detalhe bastante importante que também não é possível parcelar através do boleto bancário ou PIX, o pagamento deverá ser apenas o <u>valor total à vista.</u>"
  },
  {
    question: "Acabei de realizar a minha inscrição, o que devo fazer agora?",
    answer: "Agora basta você ficar de olho em seu email e aguardar chegar os dados de acesso ao curso, também é importante sempre verificar a <strong>caixa de spam</strong> ou <strong>lixo eletrônico</strong> caso o e-mail não chegue na caixa de entrada. <br><br>Lembrando, caso você tenha feito o pagamento através do Boleto Bancário, poderá levar <strong>até 72 horas</strong> para você receber os dados de acesso. <br><br><small style='color: #a1a1aa;'>OBS.: Caso os dados de acesso ainda não tenha chegado, verifique seu e-mail novamente.</small>"
  },
  {
    question: "Como eu irei acessar o curso?",
    answer: "Você poderá acessar o curso através do seu <strong>Celular, Computador</strong> ou <strong>Tablet</strong>."
  },
  {
    question: "Em qual horário posso assistir as aulas?",
    answer: "Você poderá estudar a qualquer horário, a qualquer dia da semana, as aulas ficam disponíveis <strong>24 horas por dia.</strong>"
  },
  {
    question: "Como irei receber o meu certificado?",
    answer: "É bastante simples, assim que você concluir todo o curso e assistir todas as aulas, a própria plataforma irá liberar o certificado, depois basta você baixar e imprimi-lo. <br><br><small style='color: #a1a1aa;'>OBS.: Basta acessar o último módulo dentro do curso e imprimir o seu certificado.</small>"
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se durante 7 dias, você não gostar do curso, ou achar que nosso curso não é para você, basta entrar em contato conosco e pedir Reembolso que iremos devolver todo o seu dinheiro sem nenhuma enrolação."
  },
  {
    question: "Se eu tiver dúvidas durante as aulas?",
    answer: "Dentro da nossa plataforma nós temos um <strong>suporte online para dúvidas</strong>, onde respondemos todas as suas questões relacionadas ao curso."
  },
  {
    question: "Para quem é o curso?",
    answer: "Este curso é recomendado para você que já <strong>trabalha na área</strong> e quer se atualizar e também para você que está <strong>começando agora</strong> e já quer iniciar na frente de seus concorrentes com cortes e técnicas exclusivas e avançadas."
  },
  {
    question: "O curso é presencial?",
    answer: "<strong>Não</strong>, nosso treinamento é 100% online e você poderá acessá-lo do seu celular, computador ou tablet."
  },
  {
    question: "Eu conseguirei aprender apenas com vídeo aulas?",
    answer: "<strong>Sim</strong>, porém para alcançar bons resultados é ideal você aplicar tudo aquilo que irá aprender durante o curso. Lembre-se, “a prática leva à perfeição”."
  },
  {
    question: "O curso é reconhecido pelo MEC?",
    answer: "<strong>Não</strong>, apenas cursos de graduação e pós-graduação são reconhecidos pelo MEC."
  }
];