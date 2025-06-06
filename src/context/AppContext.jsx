import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({
    yearResults: [],
    citizenshipResults: []
  });
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    try {
      const response = await axios.get('https://asylum-be.onrender.com/fiscalSummary')
      return response.data
    } catch (error) {
      console.log('failed to fetch fiscal data',error)
      return []
    }
  };

  const getCitizenshipResults = async () => {
    try {
    const response = await axios.get('https://asylum-be.onrender.com/citizenshipSummary');
    return response.data
    } catch (error) {
     console.log('failed to fetch citizenship data', error)
     return []
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    try {
    const fiscalData = await getFiscalData();
    const citizenshipData = await getCitizenshipResults();

    const cleanedData = {
      yearResults:Array.isArray(fiscalData) ? fiscalData : [],
      citizenshipData: Array.isArray(citizenshipData) ? citizenshipData : [],
    }
    setGraphData({
      yearResults: fiscalData.yearResults,
      citizenshipResults: citizenshipData
    })
    } catch (error) {
     console.log('Failed to set chart', error);
     setGraphData({
      yearResults: [],
      citizenshipResults: []
     })
    } finally {
      setIsDataLoading(false)
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
