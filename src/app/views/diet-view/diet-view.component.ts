import { Component, OnInit } from '@angular/core';
import { DietItem } from 'src/app/data-types/diet-item.type';
import { Trainee } from 'src/app/data-types/trainee.type';
import { traineeData } from 'src/app/data/trainee.type';
import { DateUtil } from 'src/app/utils/date-util';
import maxBy from 'lodash';
import { dietData } from 'src/app/data/diet.data.type';

@Component({
  selector: 'app-diet-view',
  templateUrl: './diet-view.component.html',
  styleUrls: ['./diet-view.component.scss']
})
export class DietViewComponent implements OnInit {

  selectedTrainee: Trainee;
  selectedDietItem: DietItem;
  dietItems: DietItem[];
  currentDayNumber: number;
  constructor() {
  }

  ngOnInit(): void {
    this.selectedTrainee = traineeData[0];
    this.dietItems = dietData.filter(dietData => dietData.traineeId === this.selectedTrainee.id);
    const daysDiff = DateUtil.daysDiffTillToday(this.selectedTrainee.startDate);
    this.currentDayNumber = daysDiff + 1;
    if (daysDiff < this.dietItems.length) {
      this.selectedDietItem = this.dietItems.find(dietItem => dietItem.dayNumber === this.currentDayNumber);
    }
  }
}
