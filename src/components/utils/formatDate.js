// utils/formatDate.js
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    
    // Normalize the dates by setting the time to 00:00:00
    const normalizeDate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    
    const normalizedDate = normalizeDate(date);
    const normalizedToday = normalizeDate(today);
    
    // Calculate the difference in days
    const diffTime = normalizedToday - normalizedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Helper function to get weekday name in Portuguese
    const getWeekdayName = (d) => {
        return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(d);
    };
    
    if (diffDays === 0) {
        return 'Hoje';
    } else if (diffDays === 1) {
        return 'Ontem';
    } else if (diffDays > 1 && diffDays < 7) {
        return toTitleCase(getWeekdayName(date));
    } else {
        // Format the date as 'dd/MM/yyyy'
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    }
};
