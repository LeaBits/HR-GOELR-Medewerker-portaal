<?php

namespace Entities;

class LinkCategory{
    protected $title;

    public function __construct($title){
        $this->setTitle($title);
    }

    public function setTitle($new){ $this->title = $new; }

    public function getTitle(){ return $this->title; }

    public function getCleanedTitle(){
        return preg_replace('/\s+/', '', strtolower($this->title));
    }
}