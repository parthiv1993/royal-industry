import DataTable from '../../Components/DataTable/DataTable';
import translations from '../../translations';

const AboutDataTable = () => {
  const data = [
    {
      key: translations.ABOUT.NATURE_OF_BUSINESS,
      value: translations.ABOUT.NATURE_OF_BUSINESS_VALUE,
    },

    {
      key: translations.ABOUT.NATURE_OF_EMPLOYEES,
      value: translations.ABOUT.NATURE_OF_EMPLOYEES_VALUE,
    },
    {
      key: translations.ABOUT.YEAR_OF_ESTABLISHMENT,
      value: translations.ABOUT.YEAR_OF_ESTABLISHMENT_VALUE,
    },
    { key: translations.ABOUT.MARKET_COVERED, value: translations.ABOUT.MARKET_COVERED_VALUE },
    { key: translations.ABOUT.NAME_OF_CEO, value: translations.ABOUT.NAME_OF_CEO_VALUE },
    { key: translations.ABOUT.GST_NO, value: translations.ABOUT.GST_NO_VALUE },
    { key: translations.ABOUT.ANNUAL_TURNOVER, value: translations.ABOUT.ANNUAL_TURNOVER_VALUE },
    {
      key: translations.ABOUT.LEGAL_STATUS_OF_FIRM,
      value: translations.ABOUT.LEGAL_STATUS_OF_FIRM_VALUE,
    },
  ];

  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default AboutDataTable;
