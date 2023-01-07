const { v4: uuidv4 } = require('uuid');

const auction = {
  nameOfAuction: 'Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)',
  note: 'Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:',
  activeParticipant: 0,
  startDate: '01-01-2023',
  turnPeriod: 120,
  remainingTime: 120,
  participants: [
    {
      id: uuidv4(),
      name: 'OOO "Компания A"',
      setOfImprovingActions: 'Да',
      productionTime: 120,
      warrantyPeriod: 24,
      paymentTerms: '30%',
      productionCost: ['3500000 руб.', '-25000 руб.', '2475000 руб.'],
    },
    {
      id: uuidv4(),
      name: 'OOO "Компания B"',
      setOfImprovingActions: 'Нет',
      productionTime: 75,
      warrantyPeriod: 22,
      paymentTerms: '60%',
      productionCost: ['3700000 руб.', '-25000 руб.', '2475000 руб.'],
    },
    {
      id: uuidv4(),
      name: 'OOO "Компания C"',
      setOfImprovingActions: 'Нет',
      productionTime: 90,
      warrantyPeriod: 24,
      paymentTerms: '50%',
      productionCost: ['3200000 руб.', '-25000 руб.', '2475000 руб.'],
    },
    {
      id: uuidv4(),
      name: 'OOO "Компания D"',
      setOfImprovingActions: 'Да',
      productionTime: 80,
      warrantyPeriod: 36,
      paymentTerms: '100%',
      productionCost: ['2500000 руб.', '-25000 руб.', '2475000 руб.'],
    },
  ],
  tableHeadProperties: {
    turn: {
      header: 'Ход',
      rowHeaderColor: '#6295a9',
    },
    params: {
      header: 'Параметры и требования',
      rowHeaderColor: '#6295a9',
      rowCellsColor: ['#6295a9', '#6295a9'],
    },
  },
  properties: {
    setOfImprovingActions: {
      header: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления',
    },
    productionTime: {
      header: 'Срок изготовления лота, дней',
    },
    warrantyPeriod: {
      header: 'Гарантийные обязательства, мес.',
    },
    paymentTerms: {
      header: 'Условия оплаты',
    },
    productionCost: {
      header: 'Стоимость изготовления лота, руб. (без НДС)',
      rowCellsColor: ['#3f80ba', '#cd1719', '#568858'],
    },
    actions: {
      header: 'Действия:',
    }
  },
};

auction.activeParticipant = Math.floor(((new Date() - new Date(auction.startDate)) / 1000) / auction.turnPeriod) % auction.participants.length;
auction.remainingTime = Math.floor(auction.turnPeriod - ((new Date() - new Date(auction.startDate)) / 1000) % auction.turnPeriod);

module.exports = { auction };
