import AboutPageNavIcon from '../ui/svg/AboutPageNavIcon';
import BlogPageNavIcon from '../ui/svg/BlogPageNavIcon';
import CatalogPageNavIcon from '../ui/svg/CatalogPageNavIcon';
import ContactPageNavIcon from '../ui/svg/ContactPageNavIcon';
import EmailIcon from '../ui/svg/EmailIcon';
import FacebookIcon from '../ui/svg/FacebookIcon';
import HomePageNavIcon from '../ui/svg/HomePageNavIcon';
import InstagramIcon from '../ui/svg/InstagramIcon';
import LocationIcon from '../ui/svg/LocationIcon';
import PhoneIcon from '../ui/svg/PhoneIcon';
import Tg from '../ui/svg/Tg';
import Viber from '../ui/svg/Viber';
import WhatsApp from '../ui/svg/WhatsApp';

export const menuIcons = [
	<HomePageNavIcon key={'0'} />,
	<CatalogPageNavIcon key={'1'} />,
	<AboutPageNavIcon size={30} key={'2'} />,
	<BlogPageNavIcon key={'3'} />,
	<ContactPageNavIcon key={'4'} />,
];

export const iconData = contacts => [
	{
		icon: <LocationIcon />,
		text: contacts.address,
		href: contacts.addressUrl,
		aria: 'navigate to address on map',
	},
	{
		icon: <PhoneIcon />,
		text: `+${contacts.phone}`,
		href: `tel:+${contacts.phone}`,
		aria: 'make phone call',
	},
	{
		icon: <EmailIcon />,
		text: contacts.email,
		href: `mailto:${contacts.email}`,
		aria: 'send email',
	},
];

export const socialLinks = (watsapp, viber, tg, fb, insta) => [
	{ link: watsapp, icon: <WhatsApp />, label: 'whatsapp' },
	{ link: viber, icon: <Viber />, label: 'viber' },
	{ link: tg, icon: <Tg />, label: 'telegram' },
	{ link: fb, icon: <FacebookIcon />, label: 'facebook' },
	{ link: insta, icon: <InstagramIcon />, label: 'instagram' },
];

export const metaKeywords = [
	'israel',
	'Israel',
	'stairs',
	'סולמות',
	'solid wood panels',
	'wooden products',
	'מוצרים מעץ',
	'לוחות עץ',
	'shelves',
	'מדפים',
	'countertops',
	'דודים',
	'wooden floors',
	'רצפות עץ',
	'oak',
	'אלון',
	'Plywood',
	'פליט',
	'MDF',
	'Medium Density Fiberboard',
	'Plywood doors',
	'דלתות מפליט',
	'Wooden beams',
	'קרורות עץ',
	'Wooden windows',
	'חלונות עץ',
	'Oak furniture',
	'רהיטים מאלון',
	'Wooden frames',
	'מסגרות עץ',
	'Wooden railings',
	'סולמות עץ',
	'Wooden details',
	'פרטי עץ',
	'Plywood walls',
	'קירות מפליט',
	'Oak doors',
	'דלתות אלון',
	'Oak floors',
	'רצפות אלון',
	'Oak furniture',
	'רהיטים מאלון',
	'Oak beams',
	'בלוקי אלון',
	'Oak staircases',
	'סולמות אלון',
	'Ashkelon',
	'אַשְׁקְלוֹן',
	'Ashdod',
	'אַשְׁדוֹד',
	'Be’er Sheva',
	'בְּאֵר שֶׁבַע',
	'Kiryat Gat',
	'קִרְיַת גַּת',
	'Netivot',
	'נְתִיבוֹת',
	'Ofakim',
	'אוֹפָקִים',
	'Jerusalem',
	'יְרוּשָׁלַיִם',
	'Tel Aviv',
	'תֵּל אָבִיב',
	'Тель-Авив',
	'Haifa',
	'חֵיפָה',
	'Rishon LeZion',
	'רִאשׁוֹן לְצִיוֹן',
	'Petah Tikva',
	'פֶּתַח תִּקְוָה',
	'Netanya',
	'נְתַנְיָה',
	'Herzliya',
	'הֶרְצְלִיָּה',
	'Holon',
	'חוֹלוֹן',
	'Eilat',
	'אֵילַת',
	'Beer Sheva',
	'בְּאֵר שֶׁבַע',
	'Kfar Saba',
	'כְּפַר סַבָּא',
	'Rehovot',
	'רְחוֹבוֹת',
	'Hod HaSharon',
	'הוֹד הַשָׁרוֹן',
	'Modiin',
	'מוֹדִיעִין',
	'Sderot',
	'שדרות',
	'ישראל',
	'melamine',
	'lami',
	'oak Lami',
	'Oak Stairs',
	'Oak FJ',
	'Oak Timber',
	'מלמין',
	'ואריו אלון',
	'לאמי אלון',
	'מדרגות אלון',
	" בוצ'ר אלון",
	'עץ אלון',
	'לאמי',
	'מדרגות',
	"בוצ'ר",
	'ואריו',
	'עץ',
	'איכות B',
	'איכות A',
	'איכות RUSTIK',
	'אלון אירופאי',
];
