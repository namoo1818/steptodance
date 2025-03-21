package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 404 에러
 * 서버가 요청받은 리소스를 찾을 수 없을 때 발생
 */
public class NotFoundException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.NotFound";

    public NotFoundException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
