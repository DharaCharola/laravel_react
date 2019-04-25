<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $appends = ['doc_path'];

    public function getDocPathAttribute()
    {
        return public_path().'\attachments\\'.$this->file_name;
    }
}
