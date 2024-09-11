export function categorizePlatforms(data) {
  const categories = {
    Ecommerce: [],
    SocialMedia: [],
    OTTEntertainment: [],
    WorkUtility: [],
    Travel: [],
    DigitalPayment: [],
    FoodBeverage: [],
    DatingMatrimony: [],
  };

  const categoryMap = {
    amazon: 'Ecommerce',
    flipkart: 'Ecommerce',
    ajio: 'Ecommerce',
    indiamart: 'Ecommerce',
    jiomart: 'Ecommerce',
    samsung: 'Ecommerce',
    instagram: 'SocialMedia',
    flickr: 'SocialMedia',
    facebook: 'SocialMedia',
    pinterest: 'SocialMedia',
    quora: 'SocialMedia',
    twitter: 'SocialMedia',
    whatsapp: 'SocialMedia',
    isWABusiness: 'SocialMedia',
    gaana: 'OTTEntertainment',
    spotify: 'OTTEntertainment',
    toi: 'OTTEntertainment',
    github: 'WorkUtility',
    housing: 'WorkUtility',
    microsoft: 'WorkUtility',
    skype: 'WorkUtility',
    wordpress: 'WorkUtility',
    zoho: 'WorkUtility',
    booking: 'Travel',
    yatra: 'Travel',
    paytm: 'DigitalPayment',
    phonepe: 'DigitalPayment',
    swiggy: 'FoodBeverage',
    jeevansaathi: 'DatingMatrimony',
    shaadi: 'DatingMatrimony',
  };

  for (const [platform, value] of Object.entries(data)) {
    const category = categoryMap[platform];
    if (
      category &&
      value !== 'Error' &&
      value !== 'undefined' &&
      value !== undefined &&
      value !== null
    ) {
      categories[category].push(platform);
    }
  }

  return categories;
}

export function camelCaseConversion(text) {
  return text.replace(/([A-Z])/g, ' $1');
}
