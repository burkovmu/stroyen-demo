import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faMoneyBillWave,
  faCheckCircle,
  faCreditCard as faCard,
  faMobileAlt,
  faBuilding,
  faUser,
  faCalculator,
  faReceipt,
  faPaperPlane,
  faPhone,
  faEnvelope,
  faClock,
  faExclamationTriangle,
  faInfoCircle,
  faQrcode,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 1.5rem;
  }
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const Section = styled(motion.section)`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`;

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PaymentMethodCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`;

const MethodHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MethodIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const MethodTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const MethodDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MethodFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MethodFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContentCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProcessCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`;

const ProcessNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ProcessIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`;

const ProcessTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;

const ContactSection = styled(motion.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const ContactButton = styled(motion.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

function PaymentPage() {
  const handleContactClick = () => {
    // Прокрутка к форме обратной связи
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Способы оплаты</PageTitle>
        <PageSubtitle>
          Безопасные и удобные способы оплаты счетчиков электроэнергии. 
          Мы принимаем все популярные платежные методы и гарантируем безопасность каждой транзакции.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <PaymentMethodsGrid>
          <PaymentMethodCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MethodHeader>
              <MethodIcon>
                <FontAwesomeIcon icon={faCreditCard} />
              </MethodIcon>
              <MethodTitle>Банковские карты</MethodTitle>
            </MethodHeader>
            <MethodDescription>
              Оплата картами Visa, MasterCard, МИР. Безопасные платежи через защищенный шлюз.
            </MethodDescription>
            <MethodFeatures>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                VISA, MasterCard, МИР
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Мгновенное зачисление
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Без комиссии
              </MethodFeature>
            </MethodFeatures>
          </PaymentMethodCard>

          <PaymentMethodCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MethodHeader>
              <MethodIcon>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </MethodIcon>
              <MethodTitle>Наличные</MethodTitle>
            </MethodHeader>
            <MethodDescription>
              Оплата наличными при получении заказа. Удобно для тех, кто предпочитает наличный расчет.
            </MethodDescription>
            <MethodFeatures>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Оплата при получении
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Оплата производится курьеру
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Проверьте товар перед оплатой
              </MethodFeature>
            </MethodFeatures>
          </PaymentMethodCard>

          <PaymentMethodCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MethodHeader>
              <MethodIcon>
                <FontAwesomeIcon icon={faBuilding} />
              </MethodIcon>
              <MethodTitle>Безналичный расчет</MethodTitle>
            </MethodHeader>
            <MethodDescription>
              Оплата по счету для юридических лиц. Работаем в рамках вашей налоговой системы.
            </MethodDescription>
            <MethodFeatures>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Договор
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Счет на оплату
              </MethodFeature>
              <MethodFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Закрывающие документы
              </MethodFeature>
            </MethodFeatures>
          </PaymentMethodCard>
        </PaymentMethodsGrid>
      </Section>

      <Section>
        <SectionTitle>Процесс оплаты</SectionTitle>
        <ProcessGrid>
          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>1</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faCalculator} />
            </ProcessIcon>
            <ProcessTitle>Расчет стоимости</ProcessTitle>
            <ProcessDescription>
              Выбираете товары и получаете точный расчет стоимости с учетом доставки.
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>2</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faCreditCard} />
            </ProcessIcon>
            <ProcessTitle>Выбор способа оплаты</ProcessTitle>
            <ProcessDescription>
              Выбираете удобный для вас способ оплаты из доступных вариантов.
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>3</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faReceipt} />
            </ProcessIcon>
            <ProcessTitle>Подтверждение</ProcessTitle>
            <ProcessDescription>
              Получаете подтверждение оплаты и документы на email или в ЭДО.
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </Section>

      <Section>
        <SectionTitle>Важная информация</SectionTitle>
        <ContentGrid>
          <ContentCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faInfoCircle} />
              Условия оплаты
            </CardTitle>
            <CardText>
              Оплата производится в российских рублях. При оплате картой комиссия не взимается. 
              Для юридических лиц доступно бронирование заказа на 3 дня с оплатой по счету.
            </CardText>
            <CardText>
              Мы оформляем электронный документооборот (ЭДО) и предоставляем полный комплект документов: счета, акты, накладные, гарантийные талоны.
            </CardText>
          </ContentCard>

          <ContentCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              Возврат средств
            </CardTitle>
            <CardText>
              Возврат средств производится в течение 14 дней с момента покупки при сохранении 
              товарного вида и комплектности товара.
            </CardText>
            <CardText>
              Для возврата необходимо связаться с нами и предоставить документы о покупке. 
              Возврат производится тем же способом, которым была произведена оплата.
            </CardText>
          </ContentCard>
        </ContentGrid>
      </Section>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactTitle>Остались вопросы по оплате?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной информации о способах оплаты, 
          условиях кредитования и рассрочки. Наши специалисты готовы помочь!
        </ContactText>
        <ContactButton
          onClick={handleContactClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Связаться с нами
        </ContactButton>
      </ContactSection>
    </PageContainer>
  );
}

export default PaymentPage; 