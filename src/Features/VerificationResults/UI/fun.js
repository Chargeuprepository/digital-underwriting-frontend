export function categorizePlatforms(data) {
  const categories = {
    Ecommerce: [],
    SocialMedia: [],
    Betting: [],
    Others: [],
  };

  const categoryMap = {
    a23games: 'Betting',
    my11: 'Betting',
    rummycircle: 'Betting',
    amazon: 'Ecommerce',
    flipkart: 'Ecommerce',
    ajio: 'Ecommerce',
    indiamart: 'Ecommerce',
    jiomart: 'Ecommerce',
    instagram: 'SocialMedia',
    whatsapp: 'SocialMedia',
    isWABusiness: 'SocialMedia',
    paytm: 'Others',
    byjus: 'Others',
    housing: 'Others',
    yatra: 'Others',
    swiggy: 'Others',
    jeevansaathi: 'Others',
    shaadi: 'Others',
  };

  for (const [platform, value] of Object.entries(data)) {
    const category = categoryMap[platform];
    if (category && value === 'Account Found') {
      categories[category].push(platform);
    }
  }

  const filteredCategories = Object.fromEntries(
    Object.entries(categories).filter(([key, value]) => value.length > 0)
  );
  return filteredCategories;
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
