import { useMemo, useState } from "react";
import "./ClientPage.css";

const mockClients = [
  {
    id: "cl-1001",
    name: "Иван Петров",
    company: 'ООО "Рога и Копыта"',
    email: "ivan.petrov@rogi-kopyta.ru",
    phone: "+7 (999) 123-45-67",
    status: "Активный",
    lastContact: "2026-01-08",
    manager: "Александр",
    source: "Сайт",
    tags: ["VIP", "Retail"],
    notes: "Любит общаться в Telegram. Просил КП до пятницы.",
  },
  {
    id: "cl-1002",
    name: "Мария Сидорова",
    company: 'ИП "Сидорова"',
    email: "maria@sid.ip.ru",
    phone: "+7 (999) 222-33-44",
    status: "Новый",
    lastContact: "2026-01-05",
    manager: "Екатерина",
    source: "Реклама",
    tags: ["Lead"],
    notes: "Первичный контакт, интерес к тарифу Pro.",
  },
  {
    id: "cl-1003",
    name: "Алексей Иванов",
    company: 'АО "ПромТех"',
    email: "a.ivanov@promtech.ru",
    phone: "+7 (999) 777-88-99",
    status: "На паузе",
    lastContact: "2025-12-20",
    manager: "Александр",
    source: "Рекомендация",
    tags: ["B2B", "Опт"],
    notes: "Вернуться через 2 недели, ждут бюджет.",
  },
  {
    id: "cl-1004",
    name: "Наталья Орлова",
    company: 'ООО "СеверМаркет"',
    email: "n.orlova@severmarket.ru",
    phone: "+7 (999) 555-00-11",
    status: "Активный",
    lastContact: "2026-01-10",
    manager: "Илья",
    source: "Выставка",
    tags: ["Retail"],
    notes: "Попросили интеграцию с 1С.",
  },
  {
    id: "cl-1005",
    name: "Дмитрий Кузнецов",
    company: 'ООО "ЛогистикГрупп"',
    email: "dk@logigroup.ru",
    phone: "+7 (999) 909-90-90",
    status: "Потерян",
    lastContact: "2025-11-14",
    manager: "Екатерина",
    source: "Холодный звонок",
    tags: ["B2B"],
    notes: "Отказ по цене, можно вернуть на скидке.",
  },
];

function formatDate(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("ru-RU");
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ClientsPage() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(mockClients[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockClients;

    return mockClients.filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.status.toLowerCase().includes(q) ||
        (c.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query]);

  const selected = useMemo(
    () => mockClients.find((c) => c.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="clients-dashboard-block">
      <div className="block-header">
        <div>
          <h2 className="title-clients">Клиенты</h2>
          <p className="subtitle-clients">
            Управление информацией о клиентах и взаимодействиях с ними
          </p>
        </div>

        <div className="clients-actions">
          <button className="primary-btn" type="button">
            + Добавить клиента
          </button>
        </div>
      </div>

      <div className="clients-content">
        <div className="clients-split">
          {/* LEFT */}
          <aside className="clients-left">
            <div className="clients-left-top">
              <h3 className="clients-left-title">Список</h3>
              <div className="clients-count">{filtered.length}</div>
            </div>

            <div className="clients-search">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск: имя, компания, email, телефон, тег…"
                type="text"
              />
            </div>

            <div className="clients-list" role="list">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="listitem"
                  className={`clients-item ${
                    c.id === selectedId ? "active" : ""
                  }`}
                  onClick={() => setSelectedId(c.id)}
                >
                  <div className="clients-avatar">{initials(c.name)}</div>

                  <div className="clients-item-body">
                    <div className="clients-item-row">
                      <div className="clients-item-name">{c.name}</div>
                      <span className={`clients-badge status-${c.status}`}>
                        {c.status}
                      </span>
                    </div>
                    <div className="clients-item-company">{c.company}</div>
                    <div className="clients-item-meta">
                      {c.email} • {c.phone}
                    </div>
                  </div>
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="clients-empty">Ничего не найдено.</div>
              )}
            </div>
          </aside>

          {/* RIGHT */}
          <section className="clients-right">
            {selected ? (
              <div className="client-card">
                <div className="client-card-head">
                  <div>
                    <h3 className="client-card-title">{selected.name}</h3>
                    <div className="client-card-subtitle">
                      {selected.company}
                    </div>
                  </div>

                  <div className="client-card-actions">
                    <button className="secondary-btn" type="button">
                      Написать
                    </button>
                    <button className="primary-btn" type="button">
                      Создать задачу
                    </button>
                  </div>
                </div>

                <div className="client-fields">
                  <div className="client-field">
                    <div className="label">Email</div>
                    <div className="value">{selected.email}</div>
                  </div>
                  <div className="client-field">
                    <div className="label">Телефон</div>
                    <div className="value">{selected.phone}</div>
                  </div>
                  <div className="client-field">
                    <div className="label">Статус</div>
                    <div className="value">{selected.status}</div>
                  </div>
                  <div className="client-field">
                    <div className="label">Последний контакт</div>
                    <div className="value">{formatDate(selected.lastContact)}</div>
                  </div>
                  <div className="client-field">
                    <div className="label">Менеджер</div>
                    <div className="value">{selected.manager}</div>
                  </div>
                  <div className="client-field">
                    <div className="label">Источник</div>
                    <div className="value">{selected.source}</div>
                  </div>
                </div>

                <div className="client-tags">
                  <div className="label">Теги</div>
                  <div className="tags-row">
                    {(selected.tags ?? []).length ? (
                      selected.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))
                    ) : (
                      <span className="muted">нет</span>
                    )}
                  </div>
                </div>

                <div className="client-notes">
                  <div className="label">Заметки</div>
                  <div className="notes-box">{selected.notes || "—"}</div>
                </div>
              </div>
            ) : (
              <div className="clients-empty-right">Выберите клиента слева.</div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}