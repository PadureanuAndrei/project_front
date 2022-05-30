import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SearchService} from "../../services/search/search.service";
import {AnnouncementSearchCriteria} from "../../../../store";

@Component({
  selector: 'app-search-announcement',
  templateUrl: './search-announcement.component.html',
  styleUrls: ['./search-announcement.component.css']
})
export class SearchAnnouncementComponent {

  searchForm = this.formBuilder.group({
    criteria: '',
    location: '',
  })

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService) {
  }

  onSubmit(): void {
    this.searchService.setSearchCriteria(this.searchForm.value);
  }

}
