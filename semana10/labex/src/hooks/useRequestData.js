import { useState, useEffect } from 'react'
import {
  getTrips,
  getTripDetails,
} from '../historyRequisition/requisitions'

export const useGetTrips = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getTrips(url, setData)
  }, [url])

  return data
}

export const useGetTripDetails = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getTripDetails(url, setData)
  }, [url])

  const updateData = () => {
    getTripDetails(url, setData)
  }

  return [data, updateData]
}
