import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "./shared/interfaces/user";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "./shared/services/user.service";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form !: FormGroup;
  public options = ["Paris", "Nice", "Nimes"];
  public filteredOptions !: Observable<string[]>;
  public dataSource: MatTableDataSource<User> = new MatTableDataSource();
  public displayedColumns = ["gender", "cell", "email", "nat", "phone"];
  @ViewChild(MatPaginator) paginateur !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.createForm();
    if (this.form.get("autocomplete")) {
      // @ts-ignore
      this.filteredOptions = this.form.get("autocomplete").valueChanges.pipe(
        startWith(""),
        map((value: string) =>
          this.options.filter((option: string) =>
            option.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    }

    // this.userService.fetchUsers().subscribe((users: User[]) => {
    //   this.dataSource.data = users;
    //   this.dataSource.paginator = this.paginateur;
    // });

  }

  createForm() {
    this.form = this.fb.group({
      input: ["", Validators.required],
      majeur: [],
      gender: [],
      toggle: [],
      select: [],
      slider: [],
      date: [],
      start: [],
      end: []
    });
  }
  updateFilter(event: Event) {
    let filtre = (event.target as HTMLInputElement).value;
    filtre = filtre.trim().toLowerCase();
    this.dataSource.filter = filtre;
  }
}
