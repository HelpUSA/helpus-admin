import { useState } from 'react';
import {
  Activity,
  Users,
  Search,
  Globe,
  CheckCircle2,
  TrendingUp,
  Server,
  MessageSquare,
  Bot,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface SubdomainHealth {
  domain: string;
  name: string;
  category: string;
  status: 'UNKNOWN';
  latency: string;
  uptime: string;
}

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  intent: string;
  source: string;
  createdAt: string;
  status: 'NOVO' | 'EM ATENDIMENTO' | 'CONCLUÍDO';
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'health' | 'analytics'>('overview');

  const subdomains: SubdomainHealth[] = [
    { domain: 'hub.helpusbr.com', name: 'HelpUS Hub Central', category: 'Portal Main', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'search.helpusbr.com', name: 'HelpUS Search Engine', category: 'IA & Busca', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'voice.helpusbr.com', name: 'HelpUS Voice SaaS', category: 'Áudio Neural', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'agent.helpusbr.com', name: 'HelpUS Agent Studio', category: 'Agentes IA', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'realestate.helpusbr.com', name: 'HelpUS Imóveis Pro', category: 'Imobiliária', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'nexoai.helpusbr.com', name: 'NexosAI Cloud', category: 'IA & Mesh', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'health.helpusbr.com', name: 'HelpUS Saúde', category: 'Telemedicina', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'usmle.helpusbr.com', name: 'USMLE Prep', category: 'Educação Médica', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'visa.helpusbr.com', name: 'HelpUS Visa', category: 'Vistos EUA', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'wagnerdriver.helpusbr.com', name: 'Executive Driver', category: 'Mobilidade VIP', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'jobs.helpusbr.com', name: 'HelpUS Jobs', category: 'Carreiras', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'pizza.helpusbr.com', name: 'HelpUS Gourmet', category: 'Gastronomia', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'memoriaviva.helpusbr.com', name: 'Memória Viva', category: 'Cultura', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'barber.helpusbr.com', name: 'Márcio Top Barber', category: 'Barbearia', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' },
    { domain: 'neuro.eduardomagalhaes.helpusbr.com', name: 'Neuro Dr. Eduardo', category: 'Neurologia', status: 'UNKNOWN', latency: 'Não mensurada', uptime: 'Não mensurado' }
  ];

  const [leads] = useState<Lead[]>([
    {
      id: 'LEAD-9821',
      name: 'Cliente Exemplo 01',
      phone: '(00) 00000-0000',
      email: 'cliente01@example.invalid',
      intent: 'Busca de Apartamento 3 Quartos em Manaíra',
      source: 'search.helpusbr.com',
      createdAt: 'Hoje, 08:42',
      status: 'NOVO'
    },
    {
      id: 'LEAD-9820',
      name: 'Cliente Exemplo 02',
      phone: '(00) 00000-0000',
      email: 'cliente02@example.invalid',
      intent: 'Orçamento de Gerador de Voz Neural para Clínica',
      source: 'voice.helpusbr.com',
      createdAt: 'Hoje, 08:15',
      status: 'EM ATENDIMENTO'
    },
    {
      id: 'LEAD-9819',
      name: 'Cliente Exemplo 03',
      phone: '(00) 00000-0000',
      email: 'felipe.menezes@empresa.com',
      intent: 'Assessoria para Visto Americano B1/B2',
      source: 'visa.helpusbr.com',
      createdAt: 'Ontem, 21:30',
      status: 'CONCLUÍDO'
    },
    {
      id: 'LEAD-9818',
      name: 'Cliente Exemplo 04',
      phone: '(00) 00000-0000',
      email: 'cliente04@example.invalid',
      intent: 'Agendamento de Sistema de Barbeiros',
      source: 'barber.helpusbr.com',
      createdAt: 'Ontem, 19:10',
      status: 'CONCLUÍDO'
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
                HelpUS <span className="text-emerald-400">Admin Dashboard</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Painel Master & Central de Inteligência
              </span>
            </div>
          </div>

          <a
            href="https://hub.helpusbr.com"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Voltar ao Hub</span>
          </a>
        </div>
      </header>

      <div role="status" className="bg-amber-950 border-b border-amber-700 text-amber-200 px-6 py-3 text-center font-bold text-sm">MODO DEMONSTRAÇÃO — DADOS SINTÉTICOS. Nenhum uptime, latência, lead ou agente aqui representa telemetria ao vivo.</div>
      {/* Tabs Subheader */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-3">
          {[
            { id: 'overview', label: '📊 Visão Geral', icon: Activity },
            { id: 'leads', label: '⚡ Leads Capturados', icon: Users },
            { id: 'health', label: 'Status dos Subdomínios (não monitorados)', icon: Server },
            { id: 'analytics', label: '📈 Métricas de Pesquisa', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all border flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800/50 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-extrabold uppercase tracking-wider">Subdomínios Cadastrados (DEMO)</span>
              <Server className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{subdomains.length}</div>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Telemetria indisponível — UNKNOWN
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-extrabold uppercase tracking-wider">Leads Sintéticos (DEMO)</span>
              <Users className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">1,420</div>
            <span className="text-xs text-sky-400 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Dados fictícios, sem crescimento medido
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-extrabold uppercase tracking-wider">Buscas Realizadas</span>
              <Search className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">Não mensurado</div>
            <span className="text-xs text-purple-400 font-semibold">
              search.helpusbr.com
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-extrabold uppercase tracking-wider">Agentes Demonstrativos (DEMO)</span>
              <Bot className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">24</div>
            <span className="text-xs text-amber-400 font-semibold">
              Atendimento 24/7 Ativo
            </span>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-extrabold text-white">Exemplos de Leads Sintéticos (DEMO)</h3>
                <button
                  onClick={() => setActiveTab('leads')}
                  className="text-xs font-bold text-emerald-400 hover:underline"
                >
                  Ver Todos
                </button>
              </div>

              <div className="space-y-3">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-white">{lead.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {lead.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">{lead.intent}</p>
                      <span className="text-[10px] text-slate-500">{lead.source} • {lead.createdAt}</span>
                    </div>

                    <a
                      href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Status Sidebar */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 h-fit">
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                Monitor do Ecossistema
              </h3>

              <div className="space-y-3">
                {subdomains.slice(0, 6).map((item) => (
                  <div
                    key={item.domain}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-200 block">{item.name}</span>
                      <span className="text-[10px] text-slate-500">{item.domain}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.latency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
            <h3 className="text-lg font-extrabold text-white">Leads Sintéticos — Demonstração</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-extrabold uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Contato</th>
                    <th className="p-4">Intenção / Demanda</th>
                    <th className="p-4">Origem</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-medium">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/40">
                      <td className="p-4 font-mono font-bold text-slate-400">{lead.id}</td>
                      <td className="p-4 font-extrabold text-white">{lead.name}</td>
                      <td className="p-4">{lead.phone}<br /><span className="text-slate-500">{lead.email}</span></td>
                      <td className="p-4 text-slate-300">{lead.intent}</td>
                      <td className="p-4 text-emerald-400 font-bold">{lead.source}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <a
                          href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Atender</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
            <h3 className="text-lg font-extrabold text-white">Status de Uptime & Latência da Rede HelpUS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subdomains.map((item) => (
                <div
                  key={item.domain}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-white">{item.name}</span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {item.status}
                    </span>
                  </div>

                  <a
                    href={`https://${item.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>{item.domain}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span>Uptime: {item.uptime}</span>
                    <span>Latência: {item.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-center">
            <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-extrabold text-white">Relatório de Tendências de Pesquisa</h3>
            <p className="text-slate-400 text-xs max-w-lg mx-auto leading-relaxed">
              Termos mais buscados pelos clientes nos últimos 30 dias: <br />
              <strong className="text-white">1. #ImóveisJoãoPessoa</strong> • <strong className="text-white">2. #VistasAmericanos</strong> • <strong className="text-white">3. #VozNeuralIA</strong> • <strong className="text-white">4. #Telemedicina24h</strong>
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-900 text-center text-xs text-slate-500 font-medium">
        © 2026 HelpUS Technology Solutions — Admin & Intelligence Dashboard.
      </footer>
    </div>
  );
}
