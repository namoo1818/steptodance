package com.dance101.steptodance.global.exception.data.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorResponse {
    private final int status;
    private final String message;

    /**
     * 커스텀 에러 반환타입
     *
     * @param errorCode
     * @param errorMessage
     */
    public ErrorResponse(HttpStatus errorCode, String errorMessage) {
        this.status = errorCode.value();
        this.message = errorMessage;
    }

    /**
     * 서버 에러 반환타입
     *
     * @param errorCode
     */
    public ErrorResponse(ErrorCode errorCode) {
        this.status = errorCode.getStatus();
        this.message = errorCode.getMessage();
    }
}
