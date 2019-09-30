<?php

namespace Entities;

class LinkTag{
    private $title;

    public function __construct($title){
        $this->setTitle($title);
    }

    public function setTitle($new){ $this->title = $new; }

    public function getTitle(){ return $this->title; }
}