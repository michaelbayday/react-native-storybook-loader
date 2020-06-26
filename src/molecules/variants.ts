export enum ButtonVariants {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Tertiary = 'TERTIARY',
}

const variants = {
  [ButtonVariants.Primary]: {
    background: {
      default: '#151515',
      hover: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #151515',
      active:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #151515',
    },
    border: {
      default: '0',
      active: '2px solid #000000',
    },
    color: '#FFF',
    shadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
  },
  [ButtonVariants.Secondary]: {
    background: {
      default: '#FFF',
      hover: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #FFF',
      active: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #FFF',
    },
    border: {
      default: '1px solid #F0F1F0',
      active: '2px solid #F0F1F0',
    },
    color: '#151515',
    shadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
  },
  [ButtonVariants.Tertiary]: {
    background: {
      default: '#FFAC00',
      hover: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #FFAC00',
      active:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #FFAC00',
    },
    border: {
      default: '0',
      active: '2px solid #FFAC00',
    },
    color: '#000',
    shadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
  },
};

export default variants;
