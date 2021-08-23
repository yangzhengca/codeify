import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';


const packages = {
    monthly: [
      {
        id: 1,
        name: 'Start',
        description: 'For Small Teams or Office',
        buttonText: 'Start free trail',
        priceWithUnit: '$3000',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCloseCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Business',
        description: 'For Enterprise Business',
        priceWithUnit: 'Start from $5000',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Serverless eCommerce Store',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Business king',
        description: 'For Pro Business Customer',
        priceWithUnit: 'Start from $8000',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Full Stack eCommerce Store',
            isAvailable: true,
          },
        ],
      },
    ],
    annual: [
      {
        id: 1,
        name: 'Start Service',
        description: 'For Small Teams or Office',
        buttonText: 'Start free trail',
        priceWithUnit: '$500 /time',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCloseCircle />,
            text: 'Website Maintenance',
            isAvailable: false,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: '5 x 8 Response',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Business Service',
        description: 'For Enterprise Business',
        priceWithUnit: '$1000 /month',
        buttonText: 'Create account',
        // anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Maintenance (Maximum 20 hours)',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: '7 x 12 Response',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Business King Service',
        description: 'For Pro Business Customer',
        priceWithUnit: '$2000 /month',
        buttonText: 'Create account',
        // anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Maintenance (Maximum 50 hours)',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: '7 x 24 Response',
            isAvailable: true,
          },
        ],
      },
    ],
  };


export default packages 