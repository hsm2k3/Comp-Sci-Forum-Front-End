export const fetchSections = () => {
    fetch('/api/sections')
        .then(res => {
            return res.json()
        })
};