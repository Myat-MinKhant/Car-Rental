export const getUserPosition = (setCenter) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCenter({ lat: latitude, lng: longitude });
            },
            error => {
                console.error(error);
            },
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};