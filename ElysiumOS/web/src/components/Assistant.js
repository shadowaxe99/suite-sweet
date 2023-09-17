
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssistant } from '../redux/actions';
import { useApolloClient } from '@apollo/client';
import { GET_ASSISTANT } from '../apollo/queries';
import { UPDATE_ASSISTANT } from '../apollo/mutations';

const Assistant = () => {
  const dispatch = useDispatch();
  const client = useApolloClient();
  const assistant = useSelector(state => state.assistant);
  const [assistantData, setAssistantData] = useState(assistant);

  useEffect(() => {
    const fetchAssistant = async () => {
      const { data } = await client.query({ query: GET_ASSISTANT });
      dispatch(updateAssistant(data.assistant));
      setAssistantData(data.assistant);
    };

    fetchAssistant();
  }, [client, dispatch]);

  const handleUpdate = async () => {
    const { data } = await client.mutate({ mutation: UPDATE_ASSISTANT, variables: { assistant: assistantData } });
    dispatch(updateAssistant(data.updateAssistant));
  };

  return (
    <div>
      <h1>Assistant</h1>
      <p>{assistantData.name}</p>
      <button onClick={handleUpdate}>Update Assistant</button>
    </div>
  );
};

export default Assistant;
