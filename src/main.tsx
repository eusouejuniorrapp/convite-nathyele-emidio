import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import igreja from './assets/images/igreja.png'
import './styles.css'

const PRESENTES_URL = 'https://noivos.casar.com/nathyele-e-emidio/'
const PIX = '88999259007'

function openWhatsApp() {
  const message = encodeURIComponent('Olá! Confirmo minha presença no casamento de Nathyele e Emídio.')
  window.open(`https://wa.me/?text=${message}`, '_blank')
}

async function copyPix(setCopied: (value: boolean) => void) {
  try {
    await navigator.clipboard.writeText(PIX)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  } catch {
    alert(`Chave PIX: ${PIX}`)
  }
}

function App() {
  const [opened, setOpened] = useState(false)
  const [copied, setCopied] = useState(false)

  return (
    <main className="page-shell">
      {!opened && (
        <section className="cover-card" aria-label="Capa do convite">
          <div className="cover-line" />
          <div className="cover-title">Nathyele e Emídio</div>
          <p className="cover-date">13 de junho de 2026</p>
          <button className="open-button" onClick={() => setOpened(true)}>
            Abrir convite
          </button>
        </section>
      )}

      <section className={`phone-frame ${opened ? 'show' : 'hidden'}`} aria-label="Convite de casamento">
        <div className="invite-card">
          <header className="invite-header">
            <p>Convite de casamento</p>
            <span />
          </header>

          <img className="church" src={igreja} alt="Ilustração da igreja" />

          <blockquote className="verse">
            “Deus marcou o tempo certo para cada coisa,<br />
            e tudo quanto ele faz dura eternamente.”<br />
            <strong>– Ecl. 3:11, 14b.</strong>
          </blockquote>

          <div className="parents">
            <div>
              <p>Sebastião Souza da Costa</p>
              <p>Maria Edineuza Freitas Pinto</p>
            </div>
            <div>
              <p>José Emídio Ferreira Cabral</p>
              <p>Tereza Cristina Sampaio Cabral</p>
            </div>
          </div>

          <p className="blessing">Com a bênção de Deus e de seus pais</p>

          <h1>Nathyele <span>e</span> Emídio</h1>
          <div className="heart">♥</div>

          <section className="invitation-text">
            <p>
              convidam para a cerimônia religiosa de seu casamento,<br />
              a realizar-se às dezenove horas e trinta minutos<br />
              do dia treze de junho de dois mil e vinte e seis,<br />
              na Igreja Nossa Senhora da Conceição (Seminário da Prainha)<br />
              Av. Monsenhor Tabosa – Centro.
            </p>
            <p>
              Após a cerimônia, os noivos recepcionarão os convidados<br />
              no Royal Gourmet Boulevard.<br />
              Av. Eng. Leal Lima Verde, 570 – Sapiranga/Coité.
            </p>
            <p className="city">Fortaleza – Ceará</p>
          </section>

          <div className="gold-curve" />

          <nav className="actions" aria-label="Opções do convite">
            <button onClick={openWhatsApp}>
              <span className="icon">♡</span>
              Confirmar<br />presença
            </button>
            <a href={PRESENTES_URL} target="_blank" rel="noreferrer">
              <span className="icon">□</span>
              Lista de<br />presentes
            </a>
            <button onClick={() => copyPix(setCopied)}>
              <span className="icon">$</span>
              {copied ? 'PIX copiado' : 'PIX'}
            </button>
          </nav>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
