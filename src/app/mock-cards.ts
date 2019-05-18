import { Card } from './card';

export const CARDS: Card[] = [
  {
    headerText: 'Schedule!',
    titleText: 'We\'ll make time for you.',
    messageText: 'Put some info here about scheduling. Maybe hours too.',
    button: {
      id: 'scheduleButton',
      href: 'schedule',
      text: 'Schedule'
    }
  },{
    headerText: 'Payments!',
    titleText: 'Money, Money, Money!',
    messageText: 'Talk about payment options, maybe list prices here or have a link to prices',
    button: {
      id: 'paymentButton',
      href: '#paymentLink',
      text: 'Pay me'
    }
  },{
    headerText: 'Info!',
    titleText: 'Curious?',
    messageText: 'If you have questions on how the process works, details, facts, science and more, click the link below!',
    button: {
      id: 'infoButton',
      href: '#infoLink',
      text: 'Find out more'
    }
  }
]
