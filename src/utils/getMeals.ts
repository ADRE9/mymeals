import arrayToObject from './arrayToObject';

const getMeals = (
  meals: {ids: any[], entities: {[x: string]: {dots: any[]}}},
  dots: {entities: {[x: string]: any}},
) => {
  const denormalizedData = meals.ids.map((meal: string) => {
    return {
      ...meals.entities[meal],
      dots: meals.entities[meal]?.dots.map((dot: string) => {
        console.log('Iam Running', `${dot}` in dots.entities);
        if (`${dot}` in dots.entities) {
          return dots.entities[dot];
        }
      }),
    };
  });
  const denormalizedDataObject = arrayToObject(denormalizedData, 'id');
  return denormalizedDataObject;
};

export default getMeals;
