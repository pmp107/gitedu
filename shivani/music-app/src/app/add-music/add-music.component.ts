import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
  musicForm: FormGroup;

  id: number;
  imgUrl: string;
  name: string;
  songUrl: string;
  category: string;
  singer: string;
  showImage: boolean;
  submitted:boolean;


  constructor(private fb: FormBuilder) {
    this.musicForm = this.fb.group({
      id: [1],
      imgUrl: "",
      name: ["", Validators.required],
      songUrl: "",
      category: "",
      singer: "",
      showImage: true,
    })

  }

  get f(){
    return this.musicForm.controls;  
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.musicForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.musicForm.value, null, 4));
}

}
