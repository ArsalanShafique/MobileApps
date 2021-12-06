import React from 'react';
import {View as V} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export class Calender extends React.Component {
  state = {
    date: '',
    dateselected: false,

    finalDates: {},
    markedDates: ['2021-11-2', '2021-11-3', '2021-11-9', '2021-11-12'],
  };

  mark = () => {
    const nextDays = this.state.markedDates;
    let newDaysObject = [];
    nextDays.forEach((date) => {
      newDaysObject = {
        ...newDaysObject,
        [day]: {
          marked: false,
        },
      };
    });;
  };

  render() {
    return (
      <V
        style={{
          flex: 1,
          backgroundColor: 'yellow',
        }}>
        <NavHeader title={'Calender'} />
        <Calendar
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            height: 350,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </V>
    );
  }
}
