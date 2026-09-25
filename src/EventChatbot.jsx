import { useMemo, useState } from 'react'
import { Bot, ChevronRight, MessageCircle, Send, X } from 'lucide-react'

const venueDirectory = {
  'Western Cape': ['Cape Town International Convention Centre (CTICC)', 'GrandWest Casino & Entertainment World', 'Kirstenbosch National Botanical Garden', 'Lourensford Wine Estate', 'The Bay Hotel, Camps Bay'],
  Gauteng: ['Sandton Convention Centre', 'Gallagher Convention Centre', 'Emperors Palace', 'Montecasino', 'Kyalami Grand Prix Circuit'],
  'KwaZulu-Natal': ['Durban International Convention Centre (Durban ICC)', 'Moses Mabhida Stadium', 'Coastlands Umhlanga Hotel', 'The Capital Zimbali', 'Suncoast Casino'],
  'Eastern Cape': ['Boardwalk Casino & Entertainment World', 'East London International Convention Centre', 'The Venue Greenacres', 'Radisson Blu Hotel Port Elizabeth', 'Kariega Game Reserve'],
  'Free State': ['Windmill Casino', 'Southern Sun Bloemfontein', 'President Hotel Bloemfontein', 'Forever Resort Gariep', 'Ilanga Estate'],
  Limpopo: ['Meropa Casino & Entertainment World', 'Fusion Boutique Hotel Polokwane', 'Polokwane Royal Hotel', 'The Ranch Resort', 'Magoebaskloof Hotel'],
  Mpumalanga: ['Mbombela Stadium', 'Casterbridge Lifestyle Centre', 'Bundu Lodge', 'Pine Lake Inn', 'Misty Mountain'],
  'North West': ['Sun City Resort', 'Royal Bafokeng Stadium', 'Rustenburg Civic Centre', 'The Palace of the Lost City', 'Kloofzicht Lodge'],
  'Northern Cape': ['Mittah Seperepere Convention Centre', 'Kimberley Club', 'Kalahari Lodge', 'Mokala National Park', 'Protea Hotel Kimberley'],
}

const quickQuestions = ['Venues in Western Cape', 'Venues in Gauteng', 'Best venue for a corporate event', 'How can Glam Hub help?']

function answerQuestion(question) {
  const lower = question.toLowerCase()
  const province = Object.keys(venueDirectory).find((name) => lower.includes(name.toLowerCase()))

  if (province) return { text: `Here are some ${province} venues to explore. Availability, pricing and capacity should be confirmed directly with each venue:`, venues: venueDirectory[province] }
  if (lower.includes('corporate')) return { text: 'For corporate events, start with convention centres, hotels and purpose-built conference venues. Strong options include CTICC, Sandton Convention Centre, Gallagher Convention Centre, Durban ICC and East London ICC.' }
  if (lower.includes('wedding') || lower.includes('celebration')) return { text: 'For celebrations, consider venues with catering, décor flexibility and guest accommodation. Lourensford, Kirstenbosch, Sun City, Montecasino and The Bay Hotel are useful starting points.' }
  if (lower.includes('capacity') || lower.includes('large')) return { text: 'For larger events, begin with CTICC, Durban ICC, Gallagher Convention Centre, Sandton Convention Centre, Sun City and Moses Mabhida Stadium. The right choice depends on seating style and production needs.' }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) return { text: 'Venue pricing changes by date, guest count, catering, technical production and accommodation. Glam Hub can help you build a brief and request comparable quotes.' }
  if (lower.includes('glam') || lower.includes('help') || lower.includes('service')) return { text: 'Glam Hub supports event planning, coordination, corporate functions, launches, brand activations, wellness gatherings and community experiences.' }
  return { text: 'I can help you explore event venues by South African province, event type, capacity or budget. Try asking “Venues in Western Cape” or “Best venue for a corporate event”.' }
}

export default function EventChatbot() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi, I can help you explore South African event venues and Glam Hub services.' }])
  const response = useMemo(() => question.trim() ? answerQuestion(question) : null, [question])

  const ask = (value) => {
    const nextQuestion = value.trim()
    if (!nextQuestion) return
    const result = answerQuestion(nextQuestion)
    setMessages((current) => [...current, { from: 'user', text: nextQuestion }, { from: 'bot', ...result }])
    setQuestion('')
  }

  return <div className="event-chatbot">
    {open && <section className="chatbot-panel" aria-label="Glam Hub event venue assistant">
      <header className="chatbot-header"><div><span className="chatbot-status"><i /> Online assistant</span><strong>Venue finder</strong></div><button onClick={() => setOpen(false)} aria-label="Close venue assistant"><X size={18} /></button></header>
      <div className="chatbot-messages">{messages.map((message, index) => <div className={`chat-message ${message.from}`} key={`${message.text}-${index}`}><p>{message.text}</p>{message.venues && <ul>{message.venues.map((venue) => <li key={venue}><ChevronRight size={13} />{venue}</li>)}</ul>}</div>)}</div>
      <div className="chatbot-quick-actions">{quickQuestions.map((item) => <button key={item} onClick={() => ask(item)}>{item}</button>)}</div>
      <form className="chatbot-input" onSubmit={(event) => { event.preventDefault(); ask(question) }}><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about venues..." aria-label="Ask about venues" /><button type="submit" aria-label="Send question"><Send size={16} /></button></form>
      {response && <span className="chatbot-hint">Press send to ask this question</span>}
    </section>}
    <button className="chatbot-trigger" onClick={() => setOpen(!open)} aria-label={open ? 'Close venue assistant' : 'Open venue assistant'}><Bot size={18} /><span>Venue finder</span></button>
  </div>
}
