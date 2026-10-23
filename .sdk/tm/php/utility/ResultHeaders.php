<?php
declare(strict_types=1);

// Vibeking SDK utility: result_headers

class VibekingResultHeaders
{
    public static function call(VibekingContext $ctx): ?VibekingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
