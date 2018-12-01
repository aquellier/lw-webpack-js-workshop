import flatpickr from 'flatpickr';
function calendar() {
  const startDate = document.getElementById('booking_start_date');
  const endDate = document.getElementById('booking_end_date');
  if (startDate && endDate) {
    console.log('Hello from flatpickr');
    flatpickr(startDate, {
      minDate: 'today',
      dateFormat: 'd-m-Y',
      onChange: function(_, selectedDate) {
        // DO SOMETHING
        if(selectedDate === '') {
          return endDate.disabled = true;
        }
        endDateCalendar.set('minDate', selectedDate);
        endDate.disabled = false;
      }
    });
    const endDateCalendar =
    flatpickr(endDate, {
      dateFormat: 'd-m-Y',
    });
  }
}
export { calendar };


