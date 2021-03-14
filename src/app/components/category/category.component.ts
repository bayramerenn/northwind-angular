import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  categories: Category[] = [];
  currentCategory: Category;
  category: Category;

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.categoryService.getCategory().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    //console.log(this.currentCategory.categoryId)
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
   // console.log(this.currentCategory)
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  setAllCategory(category:Category={categoryId :0,categoryName:""}){
    this.currentCategory = this.category;
    this.getAllCategoryClass();
  }
}
