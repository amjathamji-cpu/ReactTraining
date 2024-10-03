import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IfscData {
  BRANCH: string;
  CENTRE: string;
  DISTRICT: string;
  STATE: string;
  ADDRESS: string;
  CONTACT: string;
  IMPS: boolean;
  CITY: string;
  UPI: boolean;
  MICR: string;
  RTGS: boolean;
  NEFT: boolean;
  SWIFT: string;
  ISO3166: string;
  BANK: string;
  BANKCODE: string;
  IFSC: string;
}

interface Props{
    ifscCode: string
}

function IfscAssist({ifscCode}: Props) {
    const [data, setData] = useState<IfscData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchIfscData = async () => {
        try {
          const response = await axios.get<IfscData>(`https://ifsc.razorpay.com/${ifscCode}`);
          setData(response.data);
        } catch (error) {
          setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
          setLoading(false);
        }
      };
  
      fetchIfscData();
    }, [ifscCode]);
  
    if (spinner) return <div>spinner...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h1>IFSC Data</h1>
        {data && (
          <div>
            <p><strong>Bank:</strong> {data.BANK}</p>
            <p><strong>Branch:</strong> {data.BRANCH}</p>
            <p><strong>City:</strong> {data.CITY}</p>
            <p><strong>District:</strong> {data.DISTRICT}</p>
            <p><strong>State:</strong> {data.STATE}</p>
            <p><strong>Address:</strong> {data.ADDRESS}</p>
            <p><strong>Contact:</strong> {data.CONTACT}</p>
            <p><strong>IFSC:</strong> {data.IFSC}</p>
            <p><strong>MICR:</strong> {data.MICR}</p>
            <p><strong>UPI Supported:</strong> {data.UPI ? 'Yes' : 'No'}</p>
            <p><strong>IMPS Supported:</strong> {data.IMPS ? 'Yes' : 'No'}</p>
            <p><strong>RTGS Supported:</strong> {data.RTGS ? 'Yes' : 'No'}</p>
            <p><strong>NEFT Supported:</strong> {data.NEFT ? 'Yes' : 'No'}</p>
            <p><strong>SWIFT:</strong> {data.SWIFT || 'N/A'}</p>
            <p><strong>ISO3166:</strong> {data.ISO3166}</p>
            <p><strong>Bank Code:</strong> {data.BANKCODE}</p>
          </div>
        )}
      </div>
    );
  };
  

export default IfscAssist
