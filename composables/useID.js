export const useID = () => {
  const idParameters = ['fbclid', 'gclid'];

  const route = useRoute();

  const hasIdParameters = computed(() => {
    const queryKeys = Object.keys(route.query);

    if (!queryKeys.length) return false;

    return idParameters.some((param) => queryKeys.includes(param));
  });

  const idQuery = computed(() => {
    if (!hasIdParameters.value) return {};

    return idParameters.reduce((query, param) => {
      if (Object.prototype.hasOwnProperty.call(route.query, param)) {
        query[param] = route.query[param];
      }

      return query;
    }, {});
  });

  function getIdValue(key) {
    return idQuery.value[key] || null;
  }
  return {
    getIdValue,
    hasIdParameters,
  };
};
