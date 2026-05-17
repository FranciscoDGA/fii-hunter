import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { fiis, alocacaoPorCategoria } from './data/fiis'

const s = {
  page: {
    minHeight: '100vh',
    background: '#080c16',
    color: '#e2e8f0',
    fontFamily: "'Sora', sans-serif",
  } as React.CSSProperties,

  header: {
    background: 'linear-gradient(180deg, #0f1629 0%, #080c16 100%)',
    borderBottom: '1px solid #1e2d4a',
    padding: '32px 40px',
  } as React.CSSProperties,

  headerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  } as React.CSSProperties,

  mono: {
    fontFamily: "'JetBrains Mono', monospace",
  } as React.CSSProperties,

  main: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '32px 40px',
  } as React.CSSProperties,

  card: {
    background: '#0f1629',
    border: '1px solid #1e2d4a',
    borderRadius: 12,
    padding: '20px 24px',
  } as React.CSSProperties,
}

function ScoreBar({ value, cor }: { value: number; cor: string }) {
  return (
    <div style={{ height: 4, background: '#1e2d4a', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${value * 10}%`, background: cor, borderRadius: 2 }} />
    </div>
  )
}

function FIICard({ fii }: { fii: typeof fiis[0] }) {
  const funcaoCor: Record<string, string> = {
    'Base Defensiva': '#06b6d4',
    'Proteção / Caixa': '#f59e0b',
    'Crescimento': '#a78bfa',
  }
  const badgeCor = funcaoCor[fii.funcao] ?? fii.cor

  return (
    <div style={{ ...s.card, borderTop: `3px solid ${fii.cor}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Ticker + peso */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ ...s.mono, fontSize: 20, fontWeight: 600, color: fii.cor }}>{fii.ticker}</div>
          <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{fii.nome}</div>
          <div style={{ fontSize: 12, color: '#475569', fontStyle: 'italic' }}>"{fii.apelido}"</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ ...s.mono, fontSize: 26, fontWeight: 700, color: '#f8fafc' }}>{fii.peso}%</div>
          <div style={{ fontSize: 11, color: '#475569' }}>alocação</div>
        </div>
      </div>

      {/* Badge função */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: `${badgeCor}18`, border: `1px solid ${badgeCor}30`,
        borderRadius: 6, padding: '3px 10px', width: 'fit-content',
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: badgeCor }} />
        <span style={{ fontSize: 11, color: badgeCor, fontWeight: 600 }}>{fii.funcao}</span>
      </div>

      {/* Descrição */}
      <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{fii.descricao}</p>

      {/* Scores */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: 1 }}>Durability</span>
            <span style={{ ...s.mono, fontSize: 11, color: fii.cor, fontWeight: 600 }}>{fii.durabilityScore}</span>
          </div>
          <ScoreBar value={fii.durabilityScore} cor={fii.cor} />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: 1 }}>Resilience</span>
            <span style={{ ...s.mono, fontSize: 11, color: fii.cor, fontWeight: 600 }}>{fii.resilienceScore}</span>
          </div>
          <ScoreBar value={fii.resilienceScore} cor={fii.cor} />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {fii.tags.map(tag => (
          <span key={tag} style={{
            background: '#1a2540', border: '1px solid #2d3f63',
            borderRadius: 4, padding: '2px 8px',
            fontSize: 11, color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace",
          }}>{tag}</span>
        ))}
      </div>

      {/* Destaque */}
      <div style={{ background: '#0a0e1a', borderRadius: 6, padding: '8px 12px', borderLeft: `3px solid ${fii.cor}` }}>
        <span style={{ fontSize: 12, color: '#64748b' }}>💡 {fii.destaque}</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div style={s.page}>
      {/* Header */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ ...s.mono, fontSize: 11, color: '#64748b', letterSpacing: 2, textTransform: 'uppercase' }}>
                FII Hunter System v2.0
              </span>
            </div>
            <h1 style={{ fontSize: 34, fontWeight: 700, color: '#f8fafc', lineHeight: 1.2, marginBottom: 8 }}>
              Sistema de Paz<br />
              <span style={{ color: '#f59e0b' }}>Financeira</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 14 }}>
              Portfólio FII Resiliente · Horizonte 48 Anos · Life Stage Allocation™
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ ...s.mono, fontSize: 11, color: '#64748b', marginBottom: 4 }}>PORTFOLIO ORGANISM™</div>
            <div style={{ ...s.mono, fontSize: 30, fontWeight: 700, color: '#f59e0b' }}>5 FIIs</div>
            <div style={{ fontSize: 12, color: '#475569' }}>Multi-imóvel · Multi-inquilino · Multi-região</div>
          </div>
        </div>
      </header>

      <main style={s.main}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Base Defensiva', value: '50%', sub: 'HGLG · BTLG · HGRU', cor: '#06b6d4' },
            { label: 'Proteção / Caixa', value: '40%', sub: 'KNCR — CDI+', cor: '#f59e0b' },
            { label: 'Crescimento', value: '10%', sub: 'XPML — Shoppings', cor: '#a78bfa' },
            { label: 'Total alocado', value: '100%', sub: '5 gestoras top BR', cor: '#10b981' },
          ].map((st) => (
            <div key={st.label} style={s.card}>
              <div style={{ ...s.mono, fontSize: 10, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{st.label}</div>
              <div style={{ ...s.mono, fontSize: 28, fontWeight: 700, color: st.cor }}>{st.value}</div>
              <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>{st.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart + Error Cost */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
          {/* Pie chart */}
          <div style={s.card}>
            <div style={{ ...s.mono, fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
              Life Stage Allocation™ — 48 anos
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              {alocacaoPorCategoria.map(a => (
                <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: a.cor }} />
                  <span style={{ ...s.mono, fontSize: 12, color: '#94a3b8' }}>{a.name} {a.value}%</span>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={alocacaoPorCategoria} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" stroke="none">
                  {alocacaoPorCategoria.map((entry) => (
                    <Cell key={entry.name} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#0f1629', border: '1px solid #1e2d4a', borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#e2e8f0' }}
                  formatter={(value) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Error Cost Engine */}
          <div style={s.card}>
            <div style={{ ...s.mono, fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
              Error Cost Engine™
            </div>
            <div style={{ background: '#0a0e1a', border: '1px solid #2d1f1f', borderRadius: 8, padding: 16, marginBottom: 14 }}>
              <div style={{ ...s.mono, fontSize: 12, color: '#ef4444', marginBottom: 8 }}>⚠ Evitar: Yield Traps</div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                Fundos mono-inquilino e High Yield sem qualidade. Aos 48 anos, um calote custa caro — há menos tempo para o juro composto recuperar a perda.
              </p>
            </div>
            <div style={{ background: '#0a0e1a', border: '1px solid #1a2d1f', borderRadius: 8, padding: 16 }}>
              <div style={{ ...s.mono, fontSize: 12, color: '#10b981', marginBottom: 8 }}>✓ Princípio: Durability Score™</div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                Buscamos fundos que pagarão dividendos consistentes aos 60, 70 e 80 anos — não os maiores yields de hoje.
              </p>
            </div>
          </div>
        </div>

        {/* FII Cards */}
        <div style={{ ...s.mono, fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
          Portfolio Organism™ — Os 5 Fundos
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 40 }}>
          {fiis.map(fii => <FIICard key={fii.ticker} fii={fii} />)}
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #1e2d4a', paddingTop: 24, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ ...s.mono, fontSize: 11, color: '#334155' }}>FII Hunter System · Sistema de Probabilidade de Paz Financeira</span>
          <span style={{ ...s.mono, fontSize: 11, color: '#334155' }}>Kinea · Pátria · BTG Pactual · CSHG · XP</span>
        </div>
      </main>
    </div>
  )
}
