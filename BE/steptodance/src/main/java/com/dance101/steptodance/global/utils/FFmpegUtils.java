package com.dance101.steptodance.global.utils;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FFmpegUtils {
	private final String ffmpegPath;
	private final String ffprobePath;

	public FFmpegUtils(
		@Value("${ffmpeg.location}")String ffmpegPath,
		@Value("${ffprobe.location}")String ffprobePath
	) throws IOException {
		this.ffmpegPath = ffmpegPath;
		this.ffprobePath = ffprobePath;
	}
}
