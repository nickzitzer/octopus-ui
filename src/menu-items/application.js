// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  IconShare
} from '@tabler/icons';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  IconShare
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  icon: icons.IconApps,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      icon: icons.IconMessages,
      url: '/app/chat'
    },
    {
      id: 'mail',
      title: <FormattedMessage id="mail" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/app/mail'
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/app/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'social',
      title: <FormattedMessage id="Social" />,
      type: 'item',
      icon: icons.IconShare,
      url: '/app/social'
    },
    {
      id: 'contact',
      title: <FormattedMessage id="contact" />,
      type: 'item',
      icon: icons.IconNfc,
      url: '/app/contacts'
    }
  ]
};

export default application;
