import links from '@/constants/links';
import { useUtm } from '@/composables/useUtm';

// 1. Define static constants outside the hook for efficiency and readability
const UTM_SUFFIX = 'register/?utm_campaign=promo25FTDGLLO';
const ENGLISH_LOCALE = 'en';
const VIETNAMESE_LOCALE = 'vi';

export const useRegisterLink = () => {
  const { locale } = useI18n();
  const { getUrlWithUtm } = useUtm();

  function getRegisterLink() {
    const language = locale.value;

    // 2. Determine the correct base link in a single step
    const baseLink =
      language === VIETNAMESE_LOCALE
        ? links.REGISTER_VIETNAMESE
        : links.REGISTER;

    // 3. Determine the language segment
    // This is more concise than the original nested logic
    const languageSegment = language === ENGLISH_LOCALE ? '' : `${language}/`;

    // 4. Use a template literal for clear string concatenation (instead of multiple '+' operations)
    const fullLink = `${baseLink}${languageSegment}${UTM_SUFFIX}`;

    // 5. Return the link after applying the UTM handler
    return getUrlWithUtm(fullLink);
  }

  return {
    getRegisterLink, // Remains a simple function that is called when needed
  };
};
