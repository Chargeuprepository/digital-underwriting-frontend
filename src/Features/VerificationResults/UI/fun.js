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

export const dateSubtractor = function (manufactureDateStr) {
  if (!manufactureDateStr) return;
  const [month, year] = manufactureDateStr.split(/[-,\/]/);
  const manufactureDate = new Date(`${year}-${month}`);

  const currentDate = new Date();

  // Calculate the total difference in months
  let totalMonths =
    (currentDate.getFullYear() - manufactureDate.getFullYear()) * 12;
  totalMonths -= manufactureDate.getMonth();
  totalMonths += currentDate.getMonth();

  // Calculate the difference in years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const formattedAge = `${
    years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : ''
  } ${months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : ''}`;

  return formattedAge;
};
