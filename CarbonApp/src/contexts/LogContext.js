import {createContext, useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useNavigation} from "@react-navigation/native";

import {AuthContext} from "./AuthContext";

export const LogContext = createContext();

export const LogProvider = ({children}) => {
    const {auth} = useContext(AuthContext);
    const [personalLogs, setPersonalLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = 'http://192.168.1.101:3030/data';
    const navigation = useNavigation();

    const config = {
        headers: {
            'x-authorization': auth.accessToken
        }
    };

    useEffect(() => {
        axios.get(`${baseUrl}/catalog?where=_ownerId%3D%22${auth._id}%22`)
            .then(function (response) {
                setPersonalLogs(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [auth._id]);

    const onCreateLogSubmit = async (logForm) => {
        setLoading(true);
        axios.post(`${baseUrl}/catalog`, logForm, config)
            .then(function (response) {
                const addedLog = response.data;
                setPersonalLogs(state => [...state, addedLog]);
                setLoading(false);
                navigation.navigate('Budget');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onDeleteSubmit = (id) => {
        axios.delete(`${baseUrl}/catalog/${id}`, config)
            .then(function () {
                setPersonalLogs(state => state.filter(log => log._id !== id));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const contextValues = {
        personalLogs,
        onCreateLogSubmit,
        onDeleteSubmit,
        loading
    };

    return (
        <LogContext.Provider value={contextValues}>
            {children}
        </LogContext.Provider>
    );
};