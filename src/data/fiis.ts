export interface FII {
  ticker: string
  nome: string
  apelido: string
  gestora: string
  categoria: string
  funcao: 'Base Defensiva' | 'Proteção / Caixa' | 'Crescimento'
  peso: number
  cor: string
  corBg: string
  durabilityScore: number
  resilienceScore: number
  descricao: string
  destaque: string
  tags: string[]
}

export const fiis: FII[] = [
  {
    ticker: 'HGLG11',
    nome: 'CSHG Logística',
    apelido: 'O Relógio Suíço',
    gestora: 'CSHG',
    categoria: 'Logística (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 15,
    cor: '#06b6d4',
    corBg: 'rgba(6,182,212,0.1)',
    durabilityScore: 9.4,
    resilienceScore: 9.2,
    descricao: 'Um dos fundos mais antigos e resilientes da bolsa. Patrimônio gigantesco e contratos atípicos longos garantem previsibilidade quase absoluta na renda.',
    destaque: 'Manteve dividendos estáveis durante toda a pandemia.',
    tags: ['Multi-imóvel', 'Multi-inquilino', 'Contratos longos'],
  },
  {
    ticker: 'BTLG11',
    nome: 'BTG Pactual Logística',
    apelido: 'O Gigante Ativo',
    gestora: 'BTG Pactual',
    categoria: 'Logística (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 15,
    cor: '#06b6d4',
    corBg: 'rgba(6,182,212,0.1)',
    durabilityScore: 9.1,
    resilienceScore: 8.9,
    descricao: 'Galpões de alto padrão (AAA) no raio de 30 km de São Paulo. Demanda constante e vacância baixíssima mesmo em crises, com gestão extremamente ativa.',
    destaque: 'Foco em ativos prime de alta demanda permanente.',
    tags: ['Alto Padrão AAA', 'Próximo a SP', 'Baixa vacância'],
  },
  {
    ticker: 'HGRU11',
    nome: 'Pátria Renda Urbana',
    apelido: 'O Essencial',
    gestora: 'Pátria',
    categoria: 'Renda Urbana (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 20,
    cor: '#10b981',
    corBg: 'rgba(16,185,129,0.1)',
    durabilityScore: 9.3,
    resilienceScore: 9.5,
    descricao: 'Focado em varejo essencial (supermercados) e educação. Mesmo em crises severas, as pessoas continuam comprando comida e pagando escolas.',
    destaque: 'Histórico excelente de reciclagem de portfólio com ganhos extras.',
    tags: ['Varejo essencial', 'Educação', 'Ganhos extraordinários'],
  },
  {
    ticker: 'KNCR11',
    nome: 'Kinea Rendimentos',
    apelido: 'O Porto Seguro',
    gestora: 'Kinea',
    categoria: 'Crédito High Grade (Papel)',
    funcao: 'Proteção / Caixa',
    peso: 40,
    cor: '#f59e0b',
    corBg: 'rgba(245,158,11,0.1)',
    durabilityScore: 9.6,
    resilienceScore: 9.0,
    descricao: 'Portfólio atrelado ao CDI com devedores de altíssima qualidade (High Grade). Em cenários de juros altos, atua como escudo pagando dividendos elevados e constantes.',
    destaque: 'Escudo perfeito contra a alta da Selic no Brasil.',
    tags: ['CDI+', 'High Grade', 'Proteção Selic'],
  },
  {
    ticker: 'XPML11',
    nome: 'XP Malls',
    apelido: 'O Antifrágil',
    gestora: 'XP',
    categoria: 'Shoppings (Tijolo)',
    funcao: 'Crescimento',
    peso: 10,
    cor: '#a78bfa',
    corBg: 'rgba(167,139,250,0.1)',
    durabilityScore: 8.7,
    resilienceScore: 8.5,
    descricao: 'Maior fundo de shoppings do Brasil. Diversificação geográfica e foco em shoppings para classes A e B, cujo consumo é menos afetado por crises econômicas.',
    destaque: 'Recuperou-se da pandemia demonstrando antifragilidade real.',
    tags: ['Classes A e B', 'Diversif. geográfica', 'Valorização'],
  },
]

export const alocacaoPorCategoria = [
  { name: 'Logística', value: 30, cor: '#06b6d4' },
  { name: 'Renda Urbana', value: 20, cor: '#10b981' },
  { name: 'Crédito HG', value: 40, cor: '#f59e0b' },
  { name: 'Shoppings', value: 10, cor: '#a78bfa' },
]
