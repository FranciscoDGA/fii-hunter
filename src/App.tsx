import { useState, useEffect } from 'react'
import { fiis } from './data/fiis'

type FII = typeof fiis[0]

// ─── Design tokens ─────────────────────────────────────────────────────────
const C = {
  bg:      '#07070e',
  s0:      '#0c0c18',
  s1:      '#101020',
  s2:      '#14142a',
  bd:      '#1a1a30',
  bdHi:    '#28284a',

  tx:      '#dde0f0',
  ts:      '#7a7d9a',
  tm:      '#3d3f5c',

  gr:      '#00c896',
  rd:      '#ff3a58',
  am:      '#f5a623',
  pu:      '#9d71f5',
  cy:      '#22d3ee',
  bl:      '#4b87f5',

  mono:    "'JetBrains Mono', monospace",
  sans:    "'Sora', sans-serif",
} as const

// ─── Helpers ────────────────────────────────────────────────────────────────
const brl = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const pct = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`

// ─── TopBar ─────────────────────────────────────────────────────────────────
function TopBar({ time }: { time: string }) {
  const metrics = [
    { label: 'PORTFÓLIO',    value: 'R$ 50.000',  cor: C.bl  },
    { label: 'DY MÉDIO',     value: '10,84%',     cor: C.am  },
    { label: 'P/VP MÉDIO',   value: '0,98',       cor: C.cy  },
    { label: 'RENDA/MÊS',    value: 'R$ 452',     cor: C.gr  },
    { label: 'IFIX HOJE',    value: '+0,28%',     cor: C.gr  },
  ]
  return (
    <header style={{
      height: 54, background: C.s0, borderBottom: `1px solid ${C.bd}`,
      display: 'flex', alignItems: 'center', padding: '0 20px', gap: 24,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 8 }}>
        <div style={{
          width: 7, height: 7, borderRadius: '50%',
          background: C.gr, boxShadow: `0 0 7px ${C.gr}`,
        }} />
        <span style={{ fontFamily: C.mono, fontSize: 13, fontWeight: 700, color: C.tx, letterSpacing: 2 }}>
          FII HUNTER
        </span>
        <span style={{ fontFamily: C.mono, fontSize: 9, color: C.tm }}>v2.0</span>
      </div>

      <div style={{ width: 1, height: 28, background: C.bd, flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: 28, flex: 1 }}>
        {metrics.map(m => (
          <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{
              fontFamily: C.mono, fontSize: 8, color: C.tm,
              letterSpacing: 1.5, textTransform: 'uppercase',
            }}>{m.label}</span>
            <span style={{ fontFamily: C.mono, fontSize: 14, fontWeight: 700, color: m.cor }}>
              {m.value}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: C.mono, fontSize: 12, color: C.ts }}>{time}</div>
          <div style={{ fontFamily: C.mono, fontSize: 9, color: C.tm }}>17/05/2026</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: '#001812', border: `1px solid ${C.gr}30`,
          borderRadius: 4, padding: '4px 10px',
        }}>
          <div style={{
            width: 5, height: 5, borderRadius: '50%',
            background: C.gr, boxShadow: `0 0 4px ${C.gr}`,
          }} />
          <span style={{ fontFamily: C.mono, fontSize: 9, color: C.gr }}>MERCADO ABERTO</span>
        </div>
      </div>
    </header>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
const navItems = [
  { id: 'portfolio', icon: '▦', label: 'Portfólio'  },
  { id: 'market',    icon: '◈', label: 'Mercado'    },
  { id: 'analysis',  icon: '◎', label: 'Análise'    },
  { id: 'alerts',    icon: '◆', label: 'Alertas'    },
]

function Sidebar({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <aside style={{
      width: 180, background: C.s0, borderRight: `1px solid ${C.bd}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0, paddingTop: 8,
    }}>
      {navItems.map(item => {
        const on = item.id === active
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '11px 16px', width: '100%', textAlign: 'left',
              background: on ? `${C.bl}15` : 'transparent',
              borderLeft: `2px solid ${on ? C.bl : 'transparent'}`,
              border: 'none', borderLeftWidth: 2,
              borderLeftStyle: 'solid', borderLeftColor: on ? C.bl : 'transparent',
              cursor: 'pointer', marginBottom: 2,
            }}
          >
            <span style={{ fontSize: 13, color: on ? C.bl : C.ts }}>{item.icon}</span>
            <span style={{
              fontFamily: C.sans, fontSize: 13,
              fontWeight: on ? 600 : 400, color: on ? C.tx : C.ts,
            }}>{item.label}</span>
          </button>
        )
      })}

      <div style={{ marginTop: 'auto', padding: '14px 16px', borderTop: `1px solid ${C.bd}` }}>
        <div style={{ fontFamily: C.mono, fontSize: 8, color: C.tm, marginBottom: 5, letterSpacing: 1 }}>CONTA</div>
        <div style={{ fontFamily: C.sans, fontSize: 12, color: C.ts }}>Francisco G.</div>
        <div style={{ fontFamily: C.mono, fontSize: 9, color: C.tm }}>Investidor · 48a</div>
      </div>
    </aside>
  )
}

// ─── MetricCard ───────────────────────────────────────────────────────────────
function MetricCard({ label, value, sub, cor }: {
  label: string; value: string; sub: string; cor: string
}) {
  return (
    <div style={{
      flex: 1, background: C.s1, border: `1px solid ${C.bd}`,
      borderTop: `2px solid ${cor}`, borderRadius: 6, padding: '14px 16px',
    }}>
      <div style={{
        fontFamily: C.mono, fontSize: 8, color: C.tm,
        letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8,
      }}>{label}</div>
      <div style={{ fontFamily: C.mono, fontSize: 22, fontWeight: 700, color: cor, marginBottom: 3 }}>
        {value}
      </div>
      <div style={{ fontFamily: C.sans, fontSize: 11, color: C.ts }}>{sub}</div>
    </div>
  )
}

// ─── AssetTable ───────────────────────────────────────────────────────────────
const funcaoCor: Record<string, string> = {
  'Base Defensiva':   C.cy,
  'Proteção / Caixa': C.am,
  'Crescimento':      C.pu,
}

const cols = [
  { label: 'TICKER',  w: 96  },
  { label: 'NOME',    w: 168 },
  { label: 'FUNÇÃO',  w: 136 },
  { label: 'PESO',    w: 96  },
  { label: 'PREÇO',   w: 108 },
  { label: 'VAR %',   w: 84  },
  { label: 'P/VP',    w: 72  },
  { label: 'DY 12M',  w: 84  },
  { label: 'LIQ.',    w: 80  },
  { label: 'D.SCORE', w: 90  },
]

function AssetTable({ onSelect, selected }: { onSelect: (f: FII) => void; selected: FII }) {
  return (
    <div style={{
      background: C.s1, border: `1px solid ${C.bd}`,
      borderRadius: 6, overflow: 'hidden', marginBottom: 16,
    }}>
      <div style={{
        display: 'flex', background: C.s0,
        borderBottom: `1px solid ${C.bd}`, padding: '0 12px',
      }}>
        {cols.map(col => (
          <div key={col.label} style={{
            width: col.w, flexShrink: 0, padding: '9px 8px',
            fontFamily: C.mono, fontSize: 8, color: C.tm,
            letterSpacing: 1.5, textTransform: 'uppercase',
          }}>{col.label}</div>
        ))}
      </div>

      {fiis.map((fii, i) => {
        const isSel = fii.ticker === selected.ticker
        const vc = fii.variacao >= 0 ? C.gr : C.rd
        const fc = funcaoCor[fii.funcao]

        return (
          <div
            key={fii.ticker}
            onClick={() => onSelect(fii)}
            style={{
              display: 'flex', padding: '0 12px', cursor: 'pointer',
              background: isSel ? `${C.bl}12` : i % 2 === 0 ? C.s1 : `${C.s0}cc`,
              borderLeft: `2px solid ${isSel ? C.bl : 'transparent'}`,
              borderBottom: i < fiis.length - 1 ? `1px solid ${C.bd}` : 'none',
            }}
          >
            <div style={{ width: 96, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.mono, fontSize: 13, fontWeight: 700, color: fii.cor }}>
              {fii.ticker}
            </div>
            <div style={{ width: 168, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.sans, fontSize: 12, color: C.ts,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {fii.nome}
            </div>
            <div style={{ width: 136, flexShrink: 0, padding: '11px 8px' }}>
              <span style={{
                background: `${fc}18`, border: `1px solid ${fc}35`,
                borderRadius: 4, padding: '3px 8px',
                fontFamily: C.mono, fontSize: 9, color: fc,
              }}>{fii.funcao}</span>
            </div>
            <div style={{ width: 96, flexShrink: 0, padding: '13px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 36, height: 3, background: C.bd, borderRadius: 2 }}>
                  <div style={{
                    height: '100%', width: `${fii.peso * 2.5}%`,
                    background: fii.cor, borderRadius: 2,
                  }} />
                </div>
                <span style={{ fontFamily: C.mono, fontSize: 11, color: C.tx }}>{fii.peso}%</span>
              </div>
            </div>
            <div style={{ width: 108, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.mono, fontSize: 12, fontWeight: 600, color: C.tx }}>
              {brl(fii.preco)}
            </div>
            <div style={{ width: 84, flexShrink: 0, padding: '11px 8px' }}>
              <span style={{
                fontFamily: C.mono, fontSize: 11, color: vc,
                background: fii.variacao >= 0 ? '#00c89618' : '#ff3a5818',
                padding: '3px 7px', borderRadius: 3,
              }}>{pct(fii.variacao)}</span>
            </div>
            <div style={{ width: 72, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.mono, fontSize: 12,
              color: fii.pvp < 1 ? C.gr : fii.pvp < 1.05 ? C.am : C.rd }}>
              {fii.pvp.toFixed(2)}
            </div>
            <div style={{ width: 84, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.mono, fontSize: 12, color: C.am, fontWeight: 600 }}>
              {fii.dy12m.toFixed(1)}%
            </div>
            <div style={{ width: 80, flexShrink: 0, padding: '13px 8px',
              fontFamily: C.mono, fontSize: 11, color: C.ts }}>
              {fii.liquidezDiaria}M
            </div>
            <div style={{ width: 90, flexShrink: 0, padding: '13px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: fii.cor }}>
                  {fii.durabilityScore}
                </span>
                <div style={{ flex: 1, height: 3, background: C.bd, borderRadius: 2 }}>
                  <div style={{
                    height: '100%', width: `${fii.durabilityScore * 10}%`,
                    background: fii.cor, borderRadius: 2,
                  }} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── BottomPanels ─────────────────────────────────────────────────────────────
const allocData = [
  { label: 'Crédito High Grade', ticker: 'KNCR11',      value: 40, cor: C.am },
  { label: 'Logística',          ticker: 'HGLG + BTLG', value: 30, cor: C.cy },
  { label: 'Renda Urbana',       ticker: 'HGRU11',      value: 20, cor: C.gr },
  { label: 'Shoppings',          ticker: 'XPML11',      value: 10, cor: C.pu },
]

const principles = [
  { icon: '✕', cor: C.rd, label: 'Evitar: Yield Traps',       desc: 'Mono-inquilino e High Yield sem qualidade creditícia' },
  { icon: '✓', cor: C.gr, label: 'Durability Score™',          desc: 'Dividendos consistentes aos 60, 70 e 80 anos' },
  { icon: '◈', cor: C.cy, label: 'Multi-layer Defense',        desc: 'Tijolo + Papel + segmentos não correlacionados' },
  { icon: '▲', cor: C.am, label: 'Life Stage Allocation™',     desc: '48a → 50% defensivo · 40% proteção · 10% crescimento' },
]

function BottomPanels() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div style={{ background: C.s1, border: `1px solid ${C.bd}`, borderRadius: 6, padding: '16px 20px' }}>
        <div style={{
          fontFamily: C.mono, fontSize: 8, color: C.tm,
          letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
        }}>ALOCAÇÃO POR SETOR</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          {allocData.map(a => (
            <div key={a.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <div>
                  <span style={{ fontFamily: C.sans, fontSize: 12, color: C.ts }}>{a.label}</span>
                  <span style={{ fontFamily: C.mono, fontSize: 9, color: C.tm, marginLeft: 8 }}>{a.ticker}</span>
                </div>
                <span style={{ fontFamily: C.mono, fontSize: 13, fontWeight: 700, color: a.cor }}>{a.value}%</span>
              </div>
              <div style={{ height: 5, background: C.bd, borderRadius: 3 }}>
                <div style={{
                  height: '100%', width: `${a.value}%`,
                  background: `linear-gradient(90deg, ${a.cor}ee, ${a.cor}66)`,
                  borderRadius: 3,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: C.s1, border: `1px solid ${C.bd}`, borderRadius: 6, padding: '16px 20px' }}>
        <div style={{
          fontFamily: C.mono, fontSize: 8, color: C.tm,
          letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
        }}>PRINCÍPIOS DA CARTEIRA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {principles.map(p => (
            <div key={p.label} style={{
              display: 'flex', gap: 10, padding: '9px 11px',
              background: C.s0, borderRadius: 5,
              borderLeft: `2px solid ${p.cor}`,
            }}>
              <span style={{ fontFamily: C.mono, fontSize: 11, color: p.cor, flexShrink: 0, marginTop: 1 }}>
                {p.icon}
              </span>
              <div>
                <div style={{ fontFamily: C.mono, fontSize: 11, color: p.cor, marginBottom: 2 }}>{p.label}</div>
                <div style={{ fontFamily: C.sans, fontSize: 11, color: C.ts }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── OrderPanel ───────────────────────────────────────────────────────────────
function OrderPanel({ selected }: { selected: FII }) {
  const [qty, setQty] = useState(10)
  const total = qty * selected.preco
  const rendaMes = (selected.dy12m / 100 / 12) * total
  const vc = selected.variacao >= 0 ? C.gr : C.rd

  return (
    <aside style={{
      width: 264, background: C.s0, borderLeft: `1px solid ${C.bd}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0, overflow: 'auto',
    }}>
      <div style={{
        padding: '12px 16px', borderBottom: `1px solid ${C.bd}`,
        fontFamily: C.mono, fontSize: 8, color: C.tm, letterSpacing: 1.5, textTransform: 'uppercase',
      }}>MESA DE ORDENS</div>

      <div style={{ padding: '16px', borderBottom: `1px solid ${C.bd}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: C.mono, fontSize: 20, fontWeight: 700, color: selected.cor }}>
              {selected.ticker}
            </div>
            <div style={{ fontFamily: C.sans, fontSize: 11, color: C.ts, marginTop: 2 }}>{selected.nome}</div>
            <div style={{ fontFamily: C.mono, fontSize: 9, color: C.tm, fontStyle: 'italic' }}>
              "{selected.apelido}"
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: C.mono, fontSize: 17, fontWeight: 700, color: C.tx }}>
              {brl(selected.preco)}
            </div>
            <div style={{
              fontFamily: C.mono, fontSize: 11, color: vc,
              background: selected.variacao >= 0 ? '#00c89618' : '#ff3a5818',
              padding: '2px 6px', borderRadius: 3, display: 'inline-block', marginTop: 3,
            }}>{pct(selected.variacao)}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          {[
            { label: 'P/VP',      value: selected.pvp.toFixed(2),       cor: selected.pvp < 1 ? C.gr : C.am },
            { label: 'DY 12M',    value: `${selected.dy12m.toFixed(1)}%`, cor: C.am },
            { label: 'LIQUIDEZ',  value: `${selected.liquidezDiaria}M/d`, cor: C.ts },
            { label: 'D.SCORE',   value: selected.durabilityScore.toFixed(1), cor: selected.cor },
          ].map(s => (
            <div key={s.label} style={{ background: C.s1, borderRadius: 5, padding: '8px 10px' }}>
              <div style={{ fontFamily: C.mono, fontSize: 7, color: C.tm, letterSpacing: 1.5, marginBottom: 4 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: C.mono, fontSize: 14, fontWeight: 700, color: s.cor }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', borderBottom: `1px solid ${C.bd}` }}>
        <div style={{
          fontFamily: C.mono, fontSize: 8, color: C.tm,
          letterSpacing: 1.5, marginBottom: 12, textTransform: 'uppercase',
        }}>SIMULAÇÃO DE APORTE</div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontFamily: C.sans, fontSize: 11, color: C.ts }}>Quantidade (cotas)</span>
            <span style={{ fontFamily: C.mono, fontSize: 13, fontWeight: 700, color: C.tx }}>{qty}</span>
          </div>
          <input
            type="range" min={1} max={100} value={qty}
            onChange={e => setQty(Number(e.target.value))}
            style={{ width: '100%', accentColor: selected.cor, cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: C.mono, fontSize: 8, color: C.tm }}>1</span>
            <span style={{ fontFamily: C.mono, fontSize: 8, color: C.tm }}>100</span>
          </div>
        </div>

        <div style={{
          background: C.s1, border: `1px solid ${C.bd}`,
          borderRadius: 5, padding: '11px 13px', marginBottom: 12,
        }}>
          <div style={{ fontFamily: C.mono, fontSize: 8, color: C.tm, letterSpacing: 1.5, marginBottom: 4 }}>
            TOTAL DO APORTE
          </div>
          <div style={{ fontFamily: C.mono, fontSize: 19, fontWeight: 700, color: C.tx }}>
            {brl(total)}
          </div>
          <div style={{ fontFamily: C.sans, fontSize: 10, color: C.ts, marginTop: 4 }}>
            Dividendo est. {brl(rendaMes)}<span style={{ color: C.tm }}>/mês</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button style={{
            background: `${C.gr}20`, border: `1px solid ${C.gr}45`,
            borderRadius: 5, padding: '10px',
            fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: C.gr,
            cursor: 'pointer',
          }}>COMPRAR</button>
          <button style={{
            background: `${C.rd}20`, border: `1px solid ${C.rd}45`,
            borderRadius: 5, padding: '10px',
            fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: C.rd,
            cursor: 'pointer',
          }}>VENDER</button>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        <div style={{
          fontFamily: C.mono, fontSize: 8, color: C.tm,
          letterSpacing: 1.5, marginBottom: 10, textTransform: 'uppercase',
        }}>NOTAS DO ATIVO</div>
        <div style={{
          background: C.s1, borderLeft: `2px solid ${selected.cor}`,
          borderRadius: '0 5px 5px 0', padding: '10px 12px',
        }}>
          <div style={{ fontFamily: C.sans, fontSize: 11, color: C.ts, lineHeight: 1.6 }}>
            {selected.descricao}
          </div>
        </div>
        <div style={{
          marginTop: 8, padding: '8px 10px',
          background: `${selected.cor}10`, borderRadius: 5,
        }}>
          <span style={{ fontFamily: C.mono, fontSize: 9, color: selected.cor }}>💡 </span>
          <span style={{ fontFamily: C.sans, fontSize: 10, color: C.ts }}>{selected.destaque}</span>
        </div>
      </div>

      <div style={{ marginTop: 'auto', padding: '12px 16px', borderTop: `1px solid ${C.bd}` }}>
        <div style={{
          fontFamily: C.sans, fontSize: 9, color: C.tm,
          textAlign: 'center', lineHeight: 1.5,
        }}>⚠ Simulação educacional<br />sem execução real de ordens</div>
      </div>
    </aside>
  )
}

// ─── StatusBar ────────────────────────────────────────────────────────────────
function StatusBar() {
  return (
    <footer style={{
      height: 28, background: C.s0, borderTop: `1px solid ${C.bd}`,
      display: 'flex', alignItems: 'center', padding: '0 16px', gap: 24,
      flexShrink: 0, overflow: 'hidden',
    }}>
      {fiis.map(fii => (
        <div key={fii.ticker} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: fii.cor }} />
          <span style={{ fontFamily: C.mono, fontSize: 10, color: C.ts }}>
            {fii.ticker} · {brl(fii.preco)}
          </span>
          <span style={{ fontFamily: C.mono, fontSize: 10, color: fii.variacao >= 0 ? C.gr : C.rd }}>
            {pct(fii.variacao)}
          </span>
        </div>
      ))}
      <div style={{ marginLeft: 'auto', fontFamily: C.mono, fontSize: 9, color: C.tm }}>
        FII Hunter · Sistema de Paz Financeira
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState('portfolio')
  const [selected, setSelected] = useState<FII>(fiis[3])
  const [time, setTime] = useState(new Date().toLocaleTimeString('pt-BR'))

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString('pt-BR')), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      height: '100vh', background: C.bg, color: C.tx,
      fontFamily: C.sans, display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <TopBar time={time} />

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <Sidebar active={tab} setActive={setTab} />

        <main style={{ flex: 1, overflow: 'auto', padding: '18px 22px' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <MetricCard label="Patrimônio Simulado"  value="R$ 50.000"  sub="Alocação teórica 5 FIIs"    cor={C.bl} />
            <MetricCard label="DY Médio Carteira"    value="10,84%"     sub="Últimos 12 meses"            cor={C.am} />
            <MetricCard label="P/VP Médio"           value="0,98"       sub="Desconto sobre NAV"          cor={C.gr} />
            <MetricCard label="Renda Mensal Est."    value="R$ 452"     sub="Base: histórico 12 meses"    cor={C.cy} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: C.mono, fontSize: 8, color: C.tm, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              CARTEIRA · 5 ATIVOS · CLIQUE PARA DETALHAR
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Portfólio', 'Análise', 'Radar'].map(t => {
                const on = (t === 'Portfólio' && tab === 'portfolio') ||
                           (t === 'Análise' && tab === 'analysis') ||
                           (t === 'Radar' && tab === 'market')
                return (
                  <button key={t} style={{
                    background: on ? `${C.bl}22` : 'transparent',
                    border: `1px solid ${on ? C.bl : C.bd}`,
                    borderRadius: 4, padding: '4px 12px',
                    fontFamily: C.mono, fontSize: 9,
                    color: on ? C.bl : C.ts,
                    cursor: 'pointer',
                  }}>{t}</button>
                )
              })}
            </div>
          </div>

          <AssetTable onSelect={setSelected} selected={selected} />
          <BottomPanels />
        </main>

        <OrderPanel selected={selected} />
      </div>

      <StatusBar />
    </div>
  )
}
