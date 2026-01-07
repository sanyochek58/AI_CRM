import "./DashBoard.css";
import InfoCard from "../../components/InfoCard/InfoCard";

import AnalyticsPng from "../../assets/analytics.png";
import SalesPng from "../../assets/sales.png";
import ProfitPng from "../../assets/profit.png";
import AiPng from "../../assets/ai.png";
import PaperPng from "../../assets/paper.png";
import KorzinaPng from "../../assets/korzina.png";
import HandPng from "../../assets/hand.png";
import LetterPng from "../../assets/letter.png";
import PhonePng from "../../assets/phone.png";
import PlusPng from "../../assets/plus.png";

export default function DashBoard() {
  return (
    <section className="dashboard-block">
      {/* Header */}
      <div className="dashboard-header-row">
        <div>
          <h2 className="dashboard-title">Обзор показателей</h2>
          <p className="dashboard-subtitle">С возвращением! Вот что происходит сегодня.</p>
        </div>
        <div className="dashboard-actions">
          <button className="secondary-btn">Фильтр</button>
          <button className="primary-btn">+ Отчет</button>
        </div>
      </div>

      {/* KPI Cards с цифрами */}
      <div className="dashboard-content">
        <InfoCard
          imgName={AnalyticsPng}
          title="Всего клиентов"
          value="1,247"
          trend={12.5}
        />
        <InfoCard
          imgName={SalesPng}
          title="Продажи за месяц"
          value="₽ 3,450,200"
          trend={8.3}
        />
        <InfoCard
          imgName={ProfitPng}
          title="Чистая прибыль"
          value="₽ 1,250,500"
          trend={-2.1}
        />
        <InfoCard
          imgName={AiPng}
          title="AI запросов"
          value="4,832"
          trend={15.7}
        />
      </div>

      {/* Двухколоночная секция: Активность + Быстрые действия */}
      <div className="dashboard-row-split">
        {/* Блок активности */}
        <div className="dashboard-activity-block">
          <div className="block-header">
            <h3>Последняя активность</h3>
            <button className="link-btn">Показать все</button>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <img
                  src={HandPng}
                  alt="new client icon"
                />
              </div>
              <div className="activity-content">
                <p className="activity-title">Новый клиент — ООО "Рога и Копыта"</p>
                <span className="activity-time">2 часа назад</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <img
                  src={KorzinaPng}
                  alt="payment icon"
                />
              </div>
              <div className="activity-content">
                <p className="activity-title">Оплата получена — ₽ 45,000</p>
                <span className="activity-time">5 часов назад</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <img
                  src={PaperPng}
                  alt="report icon"
                />
              </div>
              <div className="activity-content">
                <p className="activity-title">Отчёт за Q4 сформирован</p>
                <span className="activity-time">Вчера в 18:42</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <img
                  src={AiPng}
                  alt="AI icon"
                />
              </div>
              <div className="activity-content">
                <p className="activity-title">AI предложил 3 новых лида</p>
                <span className="activity-time">2 дня назад</span>
              </div>
            </div>
          </div>
        </div>

        {/* Быстрые действия */}
        <div className="dashboard-quick-actions">
          <div className="block-header">
            <h3>Быстрые действия</h3>
          </div>

          <div className="quick-actions-grid">
            <button className="action-card">
              <span className="action-icon">
                <img src={PlusPng} alt="add client icon" />
              </span>
              <span className="action-label">Добавить клиента</span>
            </button>

            <button className="action-card">
              <span className="action-icon">
                <img src={PaperPng} alt="create task icon" />
              </span>
              <span className="action-label">Создать задачу</span>
            </button>

            <button className="action-card">
              <span className="action-icon">
                <img src={PhonePng} alt="schedule call icon" />
              </span>
              <span className="action-label">Назначить звонок</span>
            </button>

            <button className="action-card">
              <span className="action-icon">
                <img src={LetterPng} alt="send letter icon" />
              </span>
              <span className="action-label">Отправить письмо</span>
            </button>
          </div>

          {/* Мини статистика */}
          <div className="mini-stats">
            <div className="mini-stat-item">
              <span className="mini-stat-label">Задач на сегодня</span>
              <span className="mini-stat-value">12</span>
            </div>
            <div className="mini-stat-item">
              <span className="mini-stat-label">Звонков запланировано</span>
              <span className="mini-stat-value">5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}