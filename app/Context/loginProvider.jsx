export function loginProvider({ children }) {
    const [role, setRole] = useState('');

    const changeRole = (id) => {
        setRole(id);
    }

    return (
        <AppContext.Provider value={{
            role,
            changeRole
        }}>
            {children}
        </AppContext.Provider>
    );
}