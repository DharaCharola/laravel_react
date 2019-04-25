<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;

class UploadController extends Controller
{
    public function upload()
    {
        if (request()->hasFile('document') && request()->file('document')->isValid()) {
            $path = request()->file('document')->store('public\attachments');

            $document = new Document;
            $document->file_name = basename($path);
            $document->save();
        }
    }

    public function getAllDocuments()
    {
        $documents = Document::all();
        return response()->json($documents);
    }
}
