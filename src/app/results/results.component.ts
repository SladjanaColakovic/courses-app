import { Component } from '@angular/core';
import { Subject } from '../models/subject';
import { Duty } from '../models/duty';
import { Department } from '../models/department';
import { StudentYear } from '../models/student-year';
import { Student } from '../models/student';
import { StudentDuty } from '../models/student-duty';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  yearFrom: string
  yearTo: string
  departmentId: number
  subjectId: number
  departmentClicked = false
  yearClicked = false
  subjectClicked =  false
  year: StudentYear
  departmet: Department
  subject: Subject
  filteredStudents: Student[]
  filteredStudentsDuties: StudentDuty[]
  dataSource: any
  displayedColumns: string[] = ['name', 'surname', 'index', 'prePoints', 'points', 'mark'];

  constructor(){
    this.filteredStudentsDuties = []
  }
  subjects: Subject[] = [

    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Java Web Development' },
    { id: 3, name: '.NET Web Development' },
    { id: 4, name: 'Baze podataka' },
    { id: 5, name: 'Test Development' },
    { id: 6, name: 'Front-End Development' },
    { id: 7, name: 'Web programiranje' },
    { id: 8, name: 'Programski jezik C++' }
  ]

  departments: Department[] = [
    {
      id: 1, name: 'Racunarstvo i automatika', subjects: [
        { id: 1, name: 'Web Development' },
        { id: 2, name: 'Java Web Development' },
        { id: 3, name: '.NET Web Development' },
        { id: 7, name: 'Web programiranje' },
      ]
    },
    {
      id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
        { id: 4, name: 'Baze podataka' },
        { id: 5, name: 'Test Development' },
        { id: 6, name: 'Front-End Development' },
        { id: 8, name: 'Programski jezik C++' }
      ]
    },
    {
      id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
        { id: 1, name: 'Web Development' },
        { id: 5, name: 'Test Development' },
        { id: 6, name: 'Front-End Development' },
        { id: 7, name: 'Web programiranje' },
      ]
    },
    {
      id: 4, name: 'Informacioni inzenjering', subjects: [
        { id: 1, name: 'Web Development' },
        { id: 3, name: '.NET Web Development' },
        { id: 6, name: 'Front-End Development' },
        { id: 8, name: 'Programski jezik C++' }
      ]
    }
  ]

  studentYears: StudentYear[] = [
    {
      id: 1, fromYear: '2014', toYear: '2015', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 2, fromYear: '2015', toYear: '2016', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 3, fromYear: '2016', toYear: '2017', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 4, fromYear: '2017', toYear: '2018', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 5, fromYear: '2018', toYear: '2019', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 6, fromYear: '2019', toYear: '2020', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    },
    {
      id: 7, fromYear: '2020', toYear: '2021', departments: [
        {
          id: 1, name: 'Racunarstvo i automatika', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Java Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
            { id: 4, name: 'Baze podataka' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        },
        {
          id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 5, name: 'Test Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 7, name: 'Web programiranje' },
          ]
        },
        {
          id: 4, name: 'Informacioni inzenjering', subjects: [
            { id: 1, name: 'Web Development' },
            { id: 3, name: '.NET Web Development' },
            { id: 6, name: 'Front-End Development' },
            { id: 8, name: 'Programski jezik C++' }
          ]
        }
      ]
    }

  ]

  dutiesSt1: Duty[] = [
    { id: 1, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 70, subject: { id: 1, name: 'Web Development' } },
    { id: 2, examPoints: 30, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 3, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 65, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt2: Duty[] = [
    { id: 4, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 70, subject: { id: 4, name: 'Baze podataka' } },
    { id: 5, examPoints: 30, finished: true, listeningYearFrom: '2018', listeningYearTo: '2019', mark: 9, preExamPoints: 55, subject: { id: 5, name: 'Test Development' } }
  ]

  dutiesSt3: Duty[] = [
    { id: 6, examPoints: 30, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 62, subject: { id: 1, name: 'Web Development' } },
    { id: 7, examPoints: 30, finished: true, listeningYearFrom: '2018', listeningYearTo: '2019', mark: 10, preExamPoints: 70, subject: { id: 5, name: 'Test Development' } },
    { id: 8, examPoints: 0, finished: false, listeningYearFrom: '2019', listeningYearTo: '2020', mark: 0, preExamPoints: 45, subject: { id: 7, name: 'Web programiranje' } }
  ]

  dutiesSt4: Duty[] = [
    { id: 9, examPoints: 0, finished: false, listeningYearFrom: '2020', listeningYearTo: '2021', mark: 0, preExamPoints: 55, subject: { id: 1, name: 'Web Development' } },

  ]

  dutiesSt5: Duty[] = [
    { id: 10, examPoints: 20, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 9, preExamPoints: 65, subject: { id: 1, name: 'Web Development' } },
    { id: 11, examPoints: 25, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 12, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 67, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt6: Duty[] = [
    { id: 13, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 70, subject: { id: 1, name: 'Web Development' } },
    { id: 14, examPoints: 25, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 15, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 65, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt7: Duty[] = [
    { id: 16, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 52, subject: { id: 1, name: 'Web Development' } },
    { id: 17, examPoints: 15, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 9, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 18, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 41, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt8: Duty[] = [
    { id: 19, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 37, subject: { id: 1, name: 'Web Development' } },
    { id: 20, examPoints: 15, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 8, preExamPoints: 60, subject: { id: 2, name: 'Java Web Development' } },
    { id: 21, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 45, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt9: Duty[] = [
    { id: 22, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 60, subject: { id: 1, name: 'Web Development' } },
    { id: 23, examPoints: 28, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 24, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 65, subject: { id: 3, name: '.NET Web Development' } }
  ]

  dutiesSt10: Duty[] = [
    { id: 25, examPoints: 0, finished: false, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 0, preExamPoints: 64, subject: { id: 1, name: 'Web Development' } },
    { id: 26, examPoints: 22, finished: true, listeningYearFrom: '2016', listeningYearTo: '2017', mark: 10, preExamPoints: 70, subject: { id: 2, name: 'Java Web Development' } },
    { id: 27, examPoints: 0, finished: false, listeningYearFrom: '2017', listeningYearTo: '2018', mark: 0, preExamPoints: 51, subject: { id: 3, name: '.NET Web Development' } }
  ]

  students: Student[] = [
    {
      id: 1, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Ana',
      surname: 'Nikolic',
      index: 'ra32/2015',
      duties: this.dutiesSt1
    },
    {
      id: 2, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Luka',
      surname: 'Lukic',
      index: 'ra14/2015',
      duties: this.dutiesSt5
    },
    {
      id: 3, department: {
        id: 2, name: 'Primenjeno softversko inzenjerstvo', subjects: [
          { id: 4, name: 'Baze podataka' },
          { id: 5, name: 'Test Development' },
          { id: 6, name: 'Front-End Development' },
          { id: 8, name: 'Programski jezik C++' }
        ]
      }, name: 'Marija',
      surname: 'Peric',
      index: 'psi10/2016',
      duties: this.dutiesSt2
    },
    {
      id: 4, department: {
        id: 3, name: 'Softversko inzenjerstvo infomarcionih tehnologija', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 5, name: 'Test Development' },
          { id: 6, name: 'Front-End Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Vera',
      surname: 'Vidic',
      index: 'sit42/2016',
      duties: this.dutiesSt3
    },
    {
      id: 5, department: {
        id: 4, name: 'Informacioni inzenjering', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 6, name: 'Front-End Development' },
          { id: 8, name: 'Programski jezik C++' }
        ]
      }, name: 'Stefan',
      surname: 'Nikic',
      index: 'in42/2019',
      duties: this.dutiesSt4
    },
    {
      id: 6, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Filip',
      surname: 'Filipovic',
      index: 'ra64/2015',
      duties: this.dutiesSt6
    },
    {
      id: 7, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Nikolina',
      surname: 'Tosic',
      index: 'ra70/2015',
      duties: this.dutiesSt7
    },
    {
      id: 8, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Dejana',
      surname: 'Vidic',
      index: 'ra101/2015',
      duties: this.dutiesSt8
    },
    {
      id: 9, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Bojan',
      surname: 'Nikolic',
      index: 'ra1/2015',
      duties: this.dutiesSt9
    },
    {
      id: 10, department: {
        id: 1, name: 'Racunarstvo i automatika', subjects: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Java Web Development' },
          { id: 3, name: '.NET Web Development' },
          { id: 7, name: 'Web programiranje' },
        ]
      }, name: 'Dejan',
      surname: 'Simic',
      index: 'ra45/2015',
      duties: this.dutiesSt10
    },
  ]

  changeSubject(event: any) {
    this.filteredStudentsDuties = []
    //console.log(event)
    //this.subjectId = this.subjects[event.index].id;
    //console.log(this.subjectId)
    this.subject = this.subjects.find(s => s.name === event.tab.textLabel)!
    //console.log(this.subject)
    this.subjectClicked = true;
    this.filteredStudents = this.students.filter(s => s.department.id === this.departmet.id && s.duties.find(d => d.subject.id === this.subject.id && d.listeningYearFrom === this.yearFrom && d.listeningYearTo === this.yearTo))
    console.log(this.filteredStudents)
    var studentDuty: StudentDuty
    this.filteredStudents.forEach((currentValue, index) => {
      var duty = currentValue.duties.find(d => d.subject.id == this.subject.id)!;
      studentDuty = {
        studentId: currentValue.id,
        studentName: currentValue.name,
        studentSurname: currentValue.surname,
        studentIndex: currentValue.index,
        dutyId: duty.id,
        examPoints: duty.examPoints,
        preExamPoints: duty.preExamPoints,
        mark: duty.mark
      }
      this.filteredStudentsDuties.push(studentDuty);
    })
    this.dataSource = new MatTableDataSource(this.filteredStudentsDuties);
  }

  changeYear(event: any){
    this.yearFrom = this.studentYears[event.index].fromYear;
    this.yearTo = this.studentYears[event.index].toYear;
    this.year = this.studentYears.find(y => y.fromYear === this.yearFrom && y.toYear === this.yearTo)!;
    //console.log(this.year)
    this.yearClicked = true;
    

  }

  changeDepartment(event: any){
    //this.departmentId = this.departments[event.index].id;
    this.departmet = this.departments.find(d => d.name === event.tab.textLabel)!
    //console.log(this.departmet)
    this.departmentClicked = true;
  }

  
}
