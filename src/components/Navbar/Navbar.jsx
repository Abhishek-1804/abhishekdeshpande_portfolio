import React, { useState } from "react";

export default function Navbar() {
  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Work Exp
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
