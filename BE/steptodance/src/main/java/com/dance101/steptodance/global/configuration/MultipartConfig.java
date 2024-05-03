package com.dance101.steptodance.global.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.unit.DataSize;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

import jakarta.servlet.MultipartConfigElement;

@Configuration
public class MultipartConfig {

	@Value("${file.multipart.maxUploadSize:524288000}")
	private long maxUploadSize;

	@Value("${file.multipart.maxUploadSizePerFile:524288000}")
	private long maxUploadSizePerFile;

	@Bean
	public MultipartResolver multipartResolver() {
		StandardServletMultipartResolver multipartResolver = new StandardServletMultipartResolver();
		return multipartResolver;
	}

	@Bean
	public MultipartConfigElement multipartConfigElement() {
		MultipartConfigFactory factory = new MultipartConfigFactory();
		factory.setMaxRequestSize(DataSize.ofBytes(maxUploadSize));
		factory.setMaxFileSize(DataSize.ofBytes(maxUploadSizePerFile));

		return factory.createMultipartConfig();
	}
}

